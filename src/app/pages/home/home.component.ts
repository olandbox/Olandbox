import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ContractService } from 'src/app/service/contract.service';
import { CaculateService } from "../../service/caculate.service";


import { BoardStatus } from "./home.model";
import { Card } from "../components/cards/card.model";

import { Observable, Subject  } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { AlertService } from 'src/app/service/alert.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

export class LandInfo {
  name: string = '';
  price: string = '';
  owner: string = '';
  img: string = '';
  disabled: boolean = true;
  selectedCard: Card = null;
  cardPrice: string = '';
  logicLength: number = null;
  constructor() {}
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  statuEnum = BoardStatus;
  boardStatus: BoardStatus = BoardStatus.offLine;
  isSearching: boolean = false;
  chainStatus: boolean = true;
  isSubmitting: boolean = false;
  isMinting: boolean = false;
  // cardLoaded: boolean = false;
  rise: string = '0.1';

  status: boolean;
  account: string;
  defaultInfo: any;
  landName: string;
  landInfo: LandInfo = new LandInfo();
  cardInfo: Card[] = null;
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
    private alertService: AlertService
    ) {
     
    }

  ngOnInit(): void {
    // this.rightChain$ = this.contractService.chainStatus$.pipe(
    //   takeUntil(this.onDestroy$),
    //   filter(status => !!status)
    // )

    // this.getBasicStatus();
    // this.getDefaultInfo();
    this.contractService.chainStatus$.subscribe(status => {
      this.status = status;
      if (status) {
        if (this.landInfo.name !== '') {
          this.boardStatus = this.statuEnum.search;
        } else {
          this.boardStatus = this.statuEnum.default;
        }
        this.getDefaultInfo();
      } else {
        this.boardStatus = this.statuEnum.offLine;
      }
    });

    this.contractService.account$.subscribe(account => {
      this.account = account;
      if (this.account === '') {
        this.landName = '';
        if (this.status) {
          this.boardStatus = this.statuEnum.default;
        } else {
          this.boardStatus = this.statuEnum.offLine;
        }
      }
    })


  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }


  async getDefaultInfo() {
    this.defaultInfo = {
      'sixPrice': await this.contractService.getPriceByLen(6),
      'sevenPrice': await this.contractService.getPriceByLen(7),
      'eightPrice': await this.contractService.getPriceByLen(8),
      'amount': await this.contractService.getTotal()
    }
  }

  async search(landName: string): Promise<void> {
    if (landName.trim() === '') {
      this.boardStatus = BoardStatus.default;
      this.getDefaultInfo();
      return;
    }

    this.isSearching = true;
    const standardName = await this.contractService.convertToStandard(landName);
   
    if (!this.caculateService.verifyLenth(standardName)) {
      this.verifyTip = true;
      this.isSearching = false;
      return;
    }

    this.landInfo = new LandInfo();
    
    try {
      const isExist = await this.contractService.isExist(standardName);
      if (isExist) {
        this.landInfo.owner = await this.contractService.getOwner(standardName);
        this.landInfo.logicLength = +await this.contractService.getLogicLength(standardName);
        this.landInfo.img = await this.getMetaImage(standardName);
      } else {
        this.landInfo.price = await this.contractService.getPriceByStr(standardName);
        this.landInfo.logicLength = +await this.contractService.getLogicLength(standardName);
        this.landInfo.disabled = this.landInfo.logicLength >=8 ? false : true;
        
        if (this.landInfo.logicLength == 6) {
          this.rise = '0.5'
        }
        if (this.landInfo.logicLength == 7) {
          this.rise = '0.3'
        }

        // this.getCard(this.landInfo.logicLength);
      }
      this.landInfo.name = landName.trim().replace(/\s{2,}/g, ' ');
      console.log(this.landInfo)

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




  async selectCard(card: Card) {
    // console.log(card)
    if (card && card.selected) {
      this.landInfo.cardPrice = await this.contractService.getPriceByCard(card.cardId);
      this.landInfo.selectedCard = card;
      this.landInfo.disabled = false;
    } else {
      this.landInfo.cardPrice = '';
      this.landInfo.selectedCard = null;
      this.landInfo.disabled = this.landInfo.logicLength >=8 ? false : true;
    }

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
        let mint: any;
        if (this.landInfo.selectedCard !== null) {
          const nowSlipPrice = await this.contractService.getSlipPriceWei(this.landInfo.cardPrice);
          mint = await this.contractService.mintByCard(this.landInfo.name, nowSlipPrice, this.landInfo.selectedCard.cardId);
        } else {
          const nowPrice = await this.contractService.getPriceByStr(this.landInfo.name);
          const nowSlipPrice = await this.contractService.getSlipPriceWei(nowPrice);
          mint = await this.contractService.mint(this.landInfo.name, nowSlipPrice);
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
    this.cardInfo = null;
    this.boardStatus = BoardStatus.default;
  }

  async goOpensea() {
    let uri = await this.contractService.getOpenseaUriByName(this.landInfo.name);
    global.window.open(uri);
  }

  async goDetail(landName: string) {
    this.router.navigate(['/detail', landName])
  }


}
