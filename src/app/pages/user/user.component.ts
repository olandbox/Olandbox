import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, forkJoin, from } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ContractService } from 'src/app/service/contract.service';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  account: string = '';
  tab: number = 1;
  ownLands: any[] = [];
  verifyLands: any[] = [];
  cards: any[] = [];
  tCanvas = null;


  isCardsLoading: boolean = false;
  isLandsLoading: boolean = false;


  constructor(
    private router: Router,
    private contractService: ContractService,
    private httpService: HttpService
  ) {
   
  }

  ngOnInit(): void {


    this.contractService.account$.subscribe(account => {
      this.account = account;
      if (account) {
        this.getCards();
        this.getPrivateLands();
        this.getVerifyLand();
      } else {

      }
      
    })
  }

  changeTab(tab: number) {
    this.tab = tab;
  }

  getAccount(name) {
    if (name.length > 12) {
      return name.slice(0,6) + '...' + name.slice(name.length - 4)
    } else {
      return name
    }
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  async getCards() {
    this.isCardsLoading = true;

    let balances$ = from(this.contractService.getCardIds()).pipe(
      switchMap(cardIds => this.contractService.getBalanceOfBatch(this.account, cardIds))
    )

    let cardInfo$ = from(this.contractService.getCards()).pipe(
      map(cards => cards.map(item => {
        return {
          cardId: +item[0],
          length: +item[2],
          name: item[1],
          priceOff: item[3]
        }
      }))
    )

    forkJoin([cardInfo$, balances$]).pipe(
      map(([cardInfo, balances]) => {
        return cardInfo.map((value: any, index: number) => {
          value.balance = +balances[index]; 
          return value;
        })})
    ).subscribe(cardInfo => {
      this.cards = cardInfo.filter(card => card.balance > 0);
      this.isCardsLoading = false;
    })
  }

  getPrivateLands() {
    const matchQuery = this.httpService.getOwnLand(this.account);
    this.httpService.getDatabase(matchQuery).subscribe(res => {
      res.forEach(element => {
        this.ownLands.push({
          name: element[0].properties.name,
          num: this.randomIntFromInterval(1,3)
        });
      });
    })
  }

  getVerifyLand() {
    const matchQuery = this.httpService.getVerifyLand(this.account);
    this.httpService.getDatabase(matchQuery).subscribe(res => {
      res.forEach(element => {
        this.verifyLands.push({
          name: element[0].properties.name,
          num: this.randomIntFromInterval(1,3)
        })
      });
    })
  }


  getTextWidth(text, font = '900 12px sans-serif') {
    // re-use canvas object for better performance
    const canvas = this.tCanvas || (this.tCanvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
  }


  async goVoucherOpensea(card) {
    let uri = `${environment.oprensearURI}${environment.voucherAddress}/`;

    global.window.open(uri + card.cardId);
  }

  async goLandOpensea(name) {
    let uri = await this.contractService.getOpenseaUriByName(name);
    global.window.open(uri);
  }

  async goDetail(name: string, belong: string) {
    this.router.navigate(['/detail', name + '.' + belong])
  }

  async goEdit(name: string, belong: string) {
    this.router.navigate(['/detail', name + '.' + belong, 'edit'])
  }

  goDc() {
    global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
  }


}
