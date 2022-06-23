import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ContractService } from 'src/app/service/contract.service';
import { environment } from 'src/environments/environment';

import { Card } from "./card.model";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnChanges {

  
  @Input() landInfo;
  @Input() isSearching: boolean = false;

  @Output() selectCardEvent = new EventEmitter<Card>();

  account: string = '';
  cardInfo: Card[] = null;
  cardLoaded: boolean = true;
  isVoucher: boolean = false;
  haveCard: boolean = true;
  voucherTip: boolean = false;
  openseaVoucher: string = environment.openseaVoucher

  constructor(
    public contractService: ContractService,
  ) {
    this.contractService.account$.subscribe(account => {
      this.account = account;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.landInfo && !changes.landInfo.firstChange) {
      this.cardLoaded = true;
      this.isVoucher = false;
      this.haveCard = true;
      this.voucherTip = false;
      console.log('change')
    }

  }

  async getCard(landLength: number) {
    if (!this.account) {
      await this.contractService.connectAccount();
      this.getCard(landLength);
    };

    this.cardLoaded = false;
    this.cardInfo = [];


    const cardIds = await this.contractService.getCardIds();
    const balances = await this.contractService.getBalanceOfBatch(this.account, cardIds);
    const cards = await this.contractService.getCards();

    let canUseCardCount: number = 0;
    this.cardInfo = cards.map((card: any, index: number) => {
      if (landLength === +card[2]) {
        canUseCardCount += +balances[index];
      }
      return {
        cardId: +card[0],
        length: +card[2],
        name: card[1],
        priceOff: +card[3],
        selected: false,
        disabled: landLength !== +card[2],
        balance: +balances[index]
      }
    });

    this.cardLoaded = true;
    this.haveCard = !!canUseCardCount;

  }

  async openVoucher() {
    if (this.isSearching) {return}
    if (!this.cardLoaded) {return}
    await this.getCard(this.landInfo.logicLength);
    let balances = 0
    let filterCards = this.cardInfo.filter(card => card.disabled === false && card.balance !== 0);
    console.log(filterCards)
    filterCards.forEach(item => balances += +item.balance);
    this.haveCard = balances ? true : false;
    if (this.haveCard) {
      this.isVoucher = true;
    } else {
      this.voucherTip = true;
    }
  }

  setCardInfoSelection(evt, card: Card) {
    card.selected = evt.target.checked;
  }
  cardSelectCancel() {
    this.cardInfo.forEach(card => card.selected = false)
    this.isVoucher = false;
    this.selectCardEvent.emit(null);
  }
  cardSelectConfirm() {
    const card: Card = this.cardInfo.find((card: Card) => card.selected === true)
    console.log(card)
    this.isVoucher = false;
    this.selectCardEvent.emit(card);
  }

  closeVoucherTip() {
    this.voucherTip = false;
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
