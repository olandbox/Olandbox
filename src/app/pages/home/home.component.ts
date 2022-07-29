import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ContractService } from 'src/app/service/contract.service';
import { CaculateService } from "../../service/caculate.service";


import { BoardStatus, LandInfo } from "./home.model";
import { Card } from "../components/cards/card.model";

import { Observable, Subject  } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { AlertService } from 'src/app/service/alert.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

// export class LandInfo {
//   name: string = '';
//   price: string = '';
//   owner: string = '';
//   img: string = '';
//   disabled: boolean = true;
//   selectedCard: Card = null;
//   cardPrice: string = '';
//   logicLength: number = null;
//   constructor() {}
// }



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  statuEnum = BoardStatus;
  boardStatus: BoardStatus = BoardStatus.offLine;
  isSearching: boolean = false;
  isSubmitting: boolean = false;
  isMinting: boolean = false;
  rise: string = '0.1';

  chainStatus: boolean;
  account: string;
  defaultInfo: any;
  landName: string;

  landInfo: LandInfo = new LandInfo();
  verifyTip: boolean = false;
  mintSlipToggle: boolean = false;

  // -----
  
  account$: Observable<string>;
  chainStatus$: Observable<boolean>;
  rightChain$: Observable<boolean>;
  onDestroy$: Subject<boolean> = new Subject();
  
  

  constructor(
    private router: Router,
    private  modalService: NgbModal,
    private caculateService: CaculateService,
    public contractService: ContractService,
    private httpService: HttpService,
    private alertService: AlertService,
    public activatedRoute: ActivatedRoute
    ) {
     
    }

  ngOnInit(): void {

    this.contractService.chainStatus$.subscribe(status => {
      this.chainStatus = status;
      if (status) {
        if (this.landInfo.standardName !== '') {
          this.boardStatus = this.statuEnum.search;
        } else {
          this.boardStatus = this.statuEnum.default;
        }
      } else {
        this.boardStatus = this.statuEnum.offLine;
      }
    });

    this.contractService.account$.subscribe(account => {
      this.account = account;
      if (!this.account) {
        this.landName = '';
        if (this.chainStatus) {
          this.boardStatus = this.statuEnum.default;
        } else {
          this.boardStatus = this.statuEnum.offLine;
        }
      } else {
        this.getVoucherByUrl();
      }
    })
   


  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  // 通过url获取已选择voucher
  getVoucherByUrl() {
    this.activatedRoute.queryParams.subscribe(async (queryParams) => {
      if (queryParams.voucher) {
        const cardIds = await this.contractService.getCardIds();
        const isOwnCard = cardIds.indexOf(queryParams.voucher);
        console.log(isOwnCard)
        if (isOwnCard > -1) {
          this.landInfo.selectedCardId = queryParams.voucher;
          this.landInfo.selectedCardLength = +this.landInfo.selectedCardId.slice(0, -2);
          this.landInfo.selectedCardPercent = +this.landInfo.selectedCardId.slice(this.landInfo.selectedCardId.length - 2);
        } else {
          this.landInfo.selectedCardId = '';
          this.landInfo.selectedCardLength = null;
          this.landInfo.selectedCardPercent = null;
        }
      } else {
        this.landInfo.selectedCardId = '';
        this.landInfo.selectedCardLength = null;
        this.landInfo.selectedCardPercent = null;
      }

      this.isDisabled();
      this.getOffPrice();
      this.getBalance();
    })
  }



  async search(landName: string): Promise<void> {
    if (landName.trim() === '') {
      this.boardStatus = BoardStatus.default;
      return;
    }

    this.isSearching = true;
    const standardName = await this.contractService.convertToStandard(landName);
   
    if (!this.caculateService.verifyLenth(standardName)) {
      this.verifyTip = true;
      this.isSearching = false;
      return;
    }

    this.landInfo.standardName = '';
    this.landInfo.logicLength = null;
    this.landInfo.originPrice = '';
    this.landInfo.owner = '';
    this.landInfo.img = '';
    this.landInfo.disabled = true;
    this.landInfo.offPrice = '';
    this.landInfo.voucherBalance = 0;
    this.landInfo = {...this.landInfo};
    
    try {
      this.landInfo.standardName = standardName;
      this.landInfo.logicLength = +await this.contractService.getLogicLength(standardName);
      if (this.landInfo.logicLength == 6) {
        this.rise = '0.5'
      }
      if (this.landInfo.logicLength == 7) {
        this.rise = '0.3'
      }

      const isExist = await this.contractService.isExist(standardName);
      if (isExist) {
        this.landInfo.owner = await this.contractService.getOwner(standardName);
        this.landInfo.img = await this.getMetaImage(standardName);
      } else {
        this.landInfo.originPrice = await this.contractService.getPriceByStr(standardName);
        
        this.isDisabled();
        this.getOffPrice();
        this.getBalance();
      }

      this.boardStatus = BoardStatus.search;

    } catch (error) {
      this.alertService.create({
        body: error,
        color: 'warning',
        time: 3000
      })
    } finally {
      this.isSearching = false;
    }
  } 

  // 计算land是否不可mint
  isDisabled() {
    if (this.landInfo.logicLength >= 8) {
      this.landInfo.disabled = false;
    } else if (this.landInfo.logicLength >= 6 && this.landInfo.logicLength < 8) {
      if (this.landInfo.selectedCardId) {
        if (this.landInfo.selectedCardLength === this.landInfo.logicLength) {
          this.landInfo.disabled = false;
        } else {
          this.landInfo.disabled = true;
        }
      } else {
        this.landInfo.disabled = true;
      }
    }

  }
  async getOffPrice() {
    if (this.landInfo.selectedCardId) {
      this.landInfo.offPrice = await this.contractService.getPriceByCard(+this.landInfo.selectedCardId)
    } else {
      this.landInfo.offPrice = this.landInfo.originPrice;
    }
  }
  async getBalance() {
    if (this.landInfo.selectedCardId) {
      this.landInfo.voucherBalance = await this.contractService.getBalanceOf(this.account, +this.landInfo.selectedCardId)
    } else {
      this.landInfo.voucherBalance = 0;
    }
  }



  // 元数据
  async getMetaData(standardName: string) {
    const urlStr = await this.contractService.getMetadataUrl(standardName);
    const url = new URL(urlStr);
    const path = `/meta${url.pathname}`;
    return await this.httpService.getMetadata(path);
  }
  // 元数据绕开http跨域问题
  async getMetaImage(standardName: string) {
    const urlStr = await this.contractService.getMetadataUrl(standardName);
    return urlStr.replace('data.json', 'image.png')
  }


  
  async mint() {

    if (!this.account) {
      await this.contractService.connectAccount();
      this.mint();
    } else {
      this.isSubmitting = true;
      this.isMinting = true;
      try {
        // 判断是否授权
        const isApproved = await this.contractService.isApproved(this.account)
        console.log('isApproved', isApproved)
        if (!isApproved) {
          const setApproved = await this.contractService.setApprove(true);
          if (!setApproved.status) return;
        }

        // mint 

         // TODO 判断应该用什么价格mint
        let mint: any;
        if (!!this.landInfo.selectedCardId && this.landInfo.selectedCardLength === this.landInfo.logicLength) {
          const nowPrice = await this.contractService.getPriceByCard(+this.landInfo.selectedCardId);
          const nowSlipPrice = await this.contractService.getSlipPriceWei(nowPrice);
          mint = await this.contractService.mintByCard(this.landInfo.standardName, nowSlipPrice, +this.landInfo.selectedCardId);
        } else {
          const nowPrice = await this.contractService.getPriceByStr(this.landInfo.standardName);
          const nowSlipPrice = await this.contractService.getSlipPriceWei(nowPrice);
          mint = await this.contractService.mint(this.landInfo.standardName, nowSlipPrice);
        }
        if (mint.status) {
          this.clearSearch();
        }
      } catch (error) {
        this.alertService.create({
          body: 'Mint Failed',
          color: 'danger',
          time: 5000
        })
      } finally {
        this.isSubmitting = false;
        this.isMinting = false;
      }
    }
  }

  

  clearSearch() {
    this.landName = '';
    this.landInfo = new LandInfo();
    this.boardStatus = BoardStatus.default;
    const url = this.router.url.split('?')[0];
    this.router.navigate([url]);
  }


  async goDetail(landName: string) {
    this.router.navigate(['/detail', landName + '.verify'])
  }


}
