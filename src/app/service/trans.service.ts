import { Inject, Injectable } from "@angular/core";
import Web3 from "web3";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { WEB3 } from "./provider";

import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";
import { ContractService } from "./contract.service";
import { SucessModalComponent} from '../pages/components/sucess-modal/sucess-modal.component'
import { FailModalComponent } from '../pages/components/fail-modal/fail-modal.component';

@Injectable({
    providedIn: 'root'
})
export class TransService {

    private SLIP = 1.3;

    private mainContract;
    private voucherContract;
    private chainStatus;
    private account;

    constructor(
        private modalService: NgbModal,
        private web3Service: ContractService,
        private alertService: AlertService
    ){
       
        
        web3Service.chainStatus$.subscribe(status => {
            this.chainStatus = status;
            if (this.chainStatus) {
                // this.mainContract = web3Service.getMainContract();
                // this.voucherContract = web3Service.getVoucherContract();
               
            }
        })
        web3Service.account$.subscribe(account => {
            if (account) {
                this.account = account;
                
            }
            
        })
    }



    async getOpenseaUriByName(name: string): Promise<string> {
        try {
            let url = await this.mainContract.methods.tokenURIByName(name).call();
            url = url.replace('https://oland.info/token', environment.oprensearURI + environment.contractAddress);
            return url;
        } catch (error) {
            console.log('getOpenseaUriByName error', error)
        }
        return environment.oprensearURI;
    }

    /**
     * 
     * @param price eth string
     * @returns wei string
     */
    getSlipPriceWei(price: string) {
        let wPrice = Web3.utils.toWei(price, 'ether')
        let sPrice = Math.floor(parseInt(wPrice.toString()) * this.SLIP).toString();
        console.log('origin price: ' + price + ', slip price: ' + sPrice)
        return sPrice;
    }
    getSlipPriceEth(price: string) {
        let wPrice = this.getSlipPriceWei(price);
        let sPrice = Web3.utils.fromWei(wPrice).toString();
        return sPrice;
    }

    async isApproved(account) {//account: string, operator: string
        try {
            return await this.voucherContract.methods.isApprovedForAll(account, environment.contractAddress).call();
        } catch (error) {
            console.log('get isApproved', error);
        }
    }

    async setApprove(approved: boolean) {
        try {
            return await this.voucherContract.methods.setApprovalForAll(environment.contractAddress, approved).send({from: this.account});
        } catch (error) {
            throw(error)
        }
    }

    async mint(name: string, price: string) {
        let options = {
            from: this.account,
            // gasPrice: await this.web3js.eth.getGasPrice(),
            gas: 480000,
            value: price
        }
        return this.mainContract.methods.register(name).send(options)
            .on('receipt', (receipt) => {
                this.modalService.open(
                    SucessModalComponent, 
                    {backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true}
                );
            })
            .on('error', (error, receipt) => {
                if (receipt.transactionHash) {
                    const modalRef = this.modalService.open(
                        FailModalComponent, 
                        {backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true}
                    );
                    modalRef.componentInstance.tx = receipt.transactionHash;
                }
            })
    }

    async mintByCard(name: string, cardPrice: string, cardId: number) {
        let options = {
            from: this.account,
            // gasPrice: await this.web3js.eth.getGasPrice(),
            gas: 480000,
            value: cardPrice
        }
        return this.mainContract.methods.registerByCard(name, cardId).send(options)
            .on('receipt', (receipt) => {
                this.modalService.open(
                    SucessModalComponent, 
                    {backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true}
                );
            })
            .on('error', (error, receipt) => {
                if (receipt.transactionHash) {
                    const modalRef = this.modalService.open(
                        FailModalComponent, 
                        {backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true}
                    );
                    modalRef.componentInstance.tx = receipt.transactionHash;
                }
            })
    }

    async minted(name: string, proof: any[], price, level): Promise<any> {
        
        let slipPrice = this.getSlipPriceWei(price);
        
        let options = {
            from: this.account,
            // gasPrice: await this.web3js.eth.getGasPrice(),
            gas: 480000,
            value: Web3.utils.toBN(slipPrice)
        }
        console.log(name, proof, level, options)

        let mint = this.mainContract.methods.register(name, proof, level).send(options)
            .on('receipt', function(receipt){
                // receipt
                console.log('receipt', receipt);
            })
            .on('error', (error, receipt) => { 
                this.alertService.create({
                    body: error.message,
                    color: 'danger',
                    time: 3000
                })
                console.log('error', error);
            });
        
        return mint;
    }


    async isExist(name: string): Promise<boolean> {
        if (!this.chainStatus) return;
        let isExist: boolean;
        isExist = await this.mainContract.methods.exist(name).call();
        return isExist;
    }

    /**
     * get land price by length
     * @param len land length
     * @returns ether string
     */
    async getPriceByLen(len: number) {
        try {
            let price = await this.mainContract.methods.priceByLen(len).call();
            return Web3.utils.fromWei(price);
        } catch (error) {
            console.log('get price by len error', error);
        }
    }
    /**
     * get land price by name
     * @param str land name
     * @returns ether string
     */
     async getPriceByStr(str: string) {
        try {
            let price = await this.mainContract.methods.priceByStr(str).call();
            return Web3.utils.fromWei(price);
        } catch (error) {
            console.log('get price by str error', error);
        }
    }

    async getPriceByCard(cardId: number) {
        try {
            let price = await this.mainContract.methods.priceByCard(cardId).call();
            return Web3.utils.fromWei(price);
        } catch (error) {
            console.log('get price by card error', error);
        }
    }

    async getOwner(str: string) {
        try {
            let owner = await this.mainContract.methods.ownerOfByName(str).call();
            return owner;
        } catch (error) {
            console.log('get owner error', error);
        }
    }

    async getSixClaimed(address) {
        try {
            return await this.mainContract.methods.sixClaimed(address).call();
        } catch (error) {
            console.log('getSixClaimed error', error);
        } 
    }
    async getSevenClaimed(address) {
        try {
            return await this.mainContract.methods.sevenClaimed(address).call();
        } catch (error) {
            console.log('sevenClaimed error', error);
        } 
    }
    async getEightClaimed(address) {
        try {
            return await this.mainContract.methods.eightClaimed(address).call();
        } catch (error) {
            console.log('eightClaimed error', error);
        } 
    }

    async getTotal() {
        try {
            return await this.mainContract.methods.totalSupply().call();
        } catch (error) {
            console.log('totalSupply error', error);
        } 
    }

    async convertToStandard(str: string): Promise<string> {
        try {
            return await this.mainContract.methods.convertToOlandStandard(str).call()
        } catch (error) {
            console.log('convertToOlandStandard error', error)
        }
    }

    async getLogicLength(str: string): Promise<number> {
        try {
            return await this.mainContract.methods.logicLength(str).call();
        } catch (error) {
            console.log('convertToOlandStandard error', error)
        }
    }

    async getMetadataUrl(str: string) {
        try {
            console.log(this.mainContract.methods)
            return await this.mainContract.methods.tokenURIByName(str).call()
        } catch (error) {
            console.log('tokenURIByName error', error)
        }
    }

    async getUserBalance(account: string) {
        try {
            return await this.mainContract.methods.balanceOf(account).call()
        } catch (error) {
            console.log('getUserBalance error', error)
        }
    }

    async getTokenByIndex(index: number) {
        try {
            return await this.mainContract.methods.tokenOfOwnerByIndex(this.account, index).call({from: this.account})
        } catch (error) {
            console.log('getTokenByIndex error', error)
        }
    }

    async getTokenUri(token: string) {
        try {
            return await this.mainContract.methods.tokenURI(token).call({from: this.account})
        } catch (error) {
            console.log('getTokenUri error', error)
        }
    }





    //----------------------voucher--------------------------------
    async getCards() {
        try {
            return await this.voucherContract.methods.getCards().call()
        } catch (error) {
            console.log('getCards error', error)
        }
    }
    async getCardIds(): Promise<any[]> {
        try {
            return await this.voucherContract.methods.getCardIds().call()
        } catch (error) {
            console.log('getCardIds error', error)
        }
    }
    async getCard(id: number) {
        try {
            return await this.voucherContract.methods.getCard(id).call()
        } catch (error) {
            console.log('getCardIds error', error)
        }
    }
    async getBalanceOf(account: string, id: number) {
        try {
            return await this.voucherContract.methods.balanceOf(account, id).call()
        } catch (error) {
            console.log('getBalanceOf error', error)
        } 
    }
    async getBalanceOfBatch(account: string, ids: number[]) {
        const len: number = ids.length;
        const accounts: string[] = Array(len).fill(account);
        try {
            return await this.voucherContract.methods.balanceOfBatch(accounts, ids).call()
        } catch (error) {
            console.log('getBalanceOfBatch error', error)
        } 
    }





}