import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/service/contract.service';
import { environment } from 'src/environments/environment';

import { Card } from "./card.model";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit, OnChanges {

  
  @Input() landInfo;
  @Input() isSearching: boolean = false;


  account: string = '';
  cardInfo: Card[] = [];
  cardLoaded: boolean = true;
  isVoucher: boolean = false;
  haveVoucher: boolean = true;
  isLogin: boolean = true;

  openseaVoucher: string = environment.openseaVoucher;


  constructor(
    private contractService: ContractService,
    private router: Router
   
  ) {
    this.contractService.account$.subscribe(account => {
      this.account = account;
      if (this.account) {
        this.getCards();
      }
    })
    
  }

  ngOnInit(): void {

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (changes.landInfo && !changes.landInfo.firstChange) {
      console.log(changes)
      this.haveVoucher = this.cardInfo.some(card => card.length === changes.landInfo.currentValue.logicLength)
    }

  }

  async getCards() {
    this.cardLoaded = false;
    this.cardInfo = [];
    const cardIds = await this.contractService.getCardIds();
    const balances = await this.contractService.getBalanceOfBatch(this.account, cardIds);
    const cards = await this.contractService.getCards();
    this.cardInfo = cards.map((card: any, index: number) => {
      return {
        cardId: +card[0],
        name: card[1],
        length: +card[2],
        priceOff: +card[3],
        selected: +this.landInfo.selectedCardId === +card[0],
        balance: +balances[index]
      }
    });
    this.cardInfo = this.cardInfo.filter(card => card.balance > 0);
    this.haveVoucher = this.cardInfo.some(card => card.length === this.landInfo.logicLength)
    this.cardLoaded = true;
  }

  

  async openVoucher() {
    if (!this.account) {
      this.isLogin = false;
      return;
    }
    if (this.isSearching) {return}
    if (!this.cardLoaded) {return}
    this.isVoucher = true;
  }


  setCardInfoSelection(evt, card: Card) {
    if (card.length !== this.landInfo.logicLength) {
      console.log('card.length',card.length, 'logicLength', this.landInfo.logicLength)
      return;
    }
    this.cardInfo.map(item => {
      if (item.cardId === card.cardId) {
        item.selected = evt.target.checked;
      } else {
        item.selected = false;
      }
    })
  }
  cardSelectCancel() {
    this.cardInfo.forEach(card => card.selected = false)
    this.isVoucher = false;
    const url = this.router.url.split('?')[0];
    this.router.navigate([url]);
    
  }
  cardSelectConfirm() {
    const card: Card = this.cardInfo.find((card: Card) => card.selected === true)
    this.isVoucher = false;
    const url = this.router.url.split('?')[0];
    if (card && card.cardId) {
      this.router.navigate([url], {queryParams: {voucher: card.cardId}});
    } else {
      this.router.navigate([url]);
    }
  }

  cancelCard(card) {
    if (card.selected && this.landInfo.logicLength !== card.length) {
      card.selected = false;
    }
  }



   // 精度减法
   priceSub(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    var precision;// 精度
    try {
      baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
  }

}
