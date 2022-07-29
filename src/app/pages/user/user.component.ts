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
  // lands: any[] = [];
  ownLands: any[] = [];
  verifyLands: any[] = [];
  cards: any[] = [];


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

  // async getLands() {
  //   this.isLandsLoading = true;
  //   const balanceCount = await this.contractService.getUserBalance(this.account);

  //   for(let i = 0; i < balanceCount; i++) {
  //     const token = await this.contractService.getTokenByIndex(i);
  //     const uriStr = await this.contractService.getTokenUri(token);
  //     const uri = new URL(uriStr);
  //     this.httpService.getMetadata(uri.pathname).then(metadata => {
  //       if (i === balanceCount - 1) {
  //         this.isLandsLoading = false;
  //       }
  //       const randomNum = this.randomIntFromInterval(1,3);
  //       metadata.num = randomNum;
  //       this.lands.push(metadata)
  //     }, err => {
  //       console.log(err)
  //     })
  //   }
    
  // }

  logout() {
    this.cards = [];
    this.ownLands = [];
    this.verifyLands = [];
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

  goDc() {
    global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
  }


}
