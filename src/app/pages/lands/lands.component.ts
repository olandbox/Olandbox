import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ContractService } from 'src/app/service/contract.service';
import { Cypher } from './cypher';
import { BehaviorSubject, combineLatest, forkJoin, merge, Subject } from 'rxjs';
import { BaseData } from './baseData';
import { combineAll, filter, mergeMap } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialog } from './language-dialog';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.less']
})
export class LandsComponent implements OnInit {
  account: string = '';
  owners: string[] = [];
  name: string; // 通过url获取land名
  isLoading: boolean = false;
  isSign: boolean = false; // 是否已签名
  rights: -1 | 0 | 1 = -1; // 无人有权 | 我有权 | 别人有权编辑
  // p | owner | verify : detail页-公共，私有，官方
  suffix: string = 'verify'; 
  edit: boolean = null; // 是否编辑状态
  editTab: '1' | '2' | '3' = '1' // 编辑tab，1,2,3 - basic | link | mapping;
  language: string = 'en';
  

  baseData: BaseData = null;


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private contractService: ContractService,
    private httpService: HttpService,
    private _matDialog: MatDialog,
  ) { 

    this.isLoading = true;
    // this.contractService.account$.subscribe(account => {
    //   this.account = account;
    //   this.rights = this.name === this.account ? 0 : 1;
    //   if (this.owner == this.account) {this.rights = 0}
    // })
    this.activeRoute.params.subscribe(params => {
      if (params.name) {
        let nameArray = decodeURI(params.name).split('.');
        this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
        this.suffix = nameArray[1];
        if (this.suffix !== 'verify' && this.suffix !== 'owner' && this.suffix !== 'p') {
          this.router.navigate(['404'])
        }
        this.contractService.account$.subscribe(async (account) => {
          this.isLoading = true;
          this.account = account;

          this.rights = this.owners.includes(this.account) ? 0 : 1;
        })
      } else {
        this.router.navigate(['404'])
      }
    })
    
  }

  async ngOnInit(): Promise<void> {
    this.getLand();
  }

  get objectStatus() {
    if (this.baseData === null || this.baseData === undefined ) {
      return -1;
    } else {
      return Object.keys(this.baseData).length;
    }
  }

  getSuffix() {}

  async getLand() {
    let label;
    this.baseData = null;
    if (this.suffix === 'owner') { label = 'OwnerLand' }
    if (this.suffix === 'verify') { label = 'VerifyLand' }
    if (this.suffix === 'p') { 
      label = 'PublicLand' ;
      this.baseData = {};
      this.isLoading = false;
      return 
    }
    

    const matchQuery = this.httpService.getLand(label, this.name);
    this.httpService.getDatabase(matchQuery).subscribe(async(res) => {
      if (res.length === 0) {
        this.baseData = {};
        this.rights = -1;
      } else {
        this.baseData = res[0][0].properties;
        this.baseData.languages = JSON.parse(this.baseData.languages || `"['${this.language}']"`);
        this.baseData.labels = res[0][0].labels;
        this.baseData.id = res[0][0].id;
        this.setLandStatus();

        let o = [];
        res.forEach(element => {
          o.push(element[1].properties.metadata)
        });
        this.owners = o;
        this.rights = this.owners.includes(this.account) ? 0 : 1;
      }
      this.isLoading = false;
    })
  }

  setLandStatus() {
    if (!this.baseData.hasOwnProperty('introStatus')) {this.baseData.introStatus = 1}
    if (!this.baseData.hasOwnProperty('logoStatus')) {this.baseData.logoStatus = 1}
  }

  switchTab(suffix) {
    this.suffix = suffix;
    let urlArray = this.router.url.split('/')
    urlArray.shift();
    urlArray[1] = urlArray[1].split('.')[0] + '.' + suffix
    urlArray[1] = decodeURI(urlArray[1]);
    this.httpService.emitData(false);
    this.router.navigate(urlArray)
  }

  changeLanguage() {
    const language = this._matDialog.open(LanguageDialog, {
        panelClass: 'lands-add-dialog',
        width: 'calc(100vw - 30px)',
        maxWidth: '1110px',
        data: {name: this.language}
    })
    language.afterClosed().subscribe(result => {
      if (result) {
        this.language = result ? result : 'en';
      }
    })
  }

  goDc() {
    global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
  }

}
