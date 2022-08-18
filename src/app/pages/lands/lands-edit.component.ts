import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { combineLatest } from 'rxjs';
import { debounce, debounceTime, filter } from "rxjs/operators";
import { AlertService } from "src/app/service/alert.service";
import { ContractService } from "src/app/service/contract.service";
import { HttpService } from "src/app/service/http.service";
import { BaseData } from "./baseData";
import { LanguageDialog } from "./language-dialog";


@Component({
    selector: 'app-lands-edit',
    templateUrl: './lands-edit.component.html',
    styleUrls: ['./lands-edit.component.less']
  })
export class LandsEditComponent implements OnInit, OnDestroy {

    editTab: '1' | '2' | '3' = '1' // 编辑tab，1,2,3 - basic | link | mapping;
    account: string = '';
    name: string; // 通过url获取land名
    suffix: string = 'verify'; 
    isSign: boolean = null; // 是否已签名
    rights: -1 | 0 | 1 = -1; // 无人有权 | 我有权 | 别人有权编辑
    isLoading: boolean = false;
    baseData: BaseData = null;
    combineService: any = null;
    language: string = 'en';
    

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private contractService: ContractService,
        private httpService: HttpService,
        private alertService: AlertService,
        private _matDialog: MatDialog,
    ) {
        
        // const paramName = this.activeRoute.snapshot.params.name;
        // if (paramName) {
        //     let nameArray = decodeURI(paramName).split('.');
        //     this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
        //     this.suffix = nameArray[1];
        //     if (this.suffix !== 'verify') {
        //         this.router.navigate(['404'])
        //     }
        // } else {
        //     this.router.navigate(['404'])
        // }
        this.activeRoute.params.subscribe(params => {
            
            if (params.name) {
                let nameArray = decodeURI(params.name).split('.');
                this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
                this.suffix = nameArray[1];
                if (this.suffix !== 'verify') {
                    this.router.navigate(['404'])
                }

                this.contractService.account$.subscribe(async (account) => {
                    this.isLoading = true;
                    this.account = account;
        
                    if (this.account) {
                        await this.getIsLogin();
                        if (this.isSign) {
                            this.getLand();
                        } else {
                            this.isLoading = false;
                        }
                    } else {
                        this.isLoading = false;
                    }
                })

            } else {
                this.router.navigate(['404'])
            }
        })
        
       
        
    }

    get objectStatus() {
        if (this.baseData === null || this.baseData === undefined ) {
          return -1;
        } else {
          return Object.keys(this.baseData).length;
        }
    }


    ngOnInit(): void {

        
    }
    ngOnDestroy(): void {

    }

    async getIsLogin() {
        const data:any = await this.httpService.isLogin();
        this.isSign = data.code === 0;
    }
    async sign() {
        const noncestr: any = await this.httpService.noncestr(this.account);
        const hexMessage = await this.contractService.hexMessage(noncestr.data);
        const signature = await this.contractService.signature(hexMessage, this.account);
        if (signature) {
            const data: any = await this.httpService.login(this.account, signature, hexMessage, noncestr.data);
            if (data.code !== 0) {
                this.alertService.create({
                body: 'Error: ' + data.message,
                color: 'danger',
                time: 2000
                });
                this.isSign = false;
            } else {
                this.isSign = true;
                this.getLand();
            }
        } else {
            this.isSign = false;
        }
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


    getLand() {
        let label: 'OwnerLand' | 'VerifyLand' = null;
        if (this.suffix === 'owner') { label = 'OwnerLand' }
        else if (this.suffix === 'verify') { label = 'VerifyLand' }
        else { 
            this.baseData = {};
            return;
        }
        this.baseData = null;
    
        const matchQuery = this.httpService.getLand(label, this.name);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            if (res.length === 0) {
                this.baseData = {};
                this.rights = -1;
            } else {
                this.baseData = res[0][0].properties;
                this.baseData.id = res[0][0].id;  
                this.baseData.languages = JSON.parse(this.baseData.languages || `"['${this.language}']"`);
                this.baseData.labels = res[0][0].labels;
                this.setLandStatus();

                let owners: string[] = [];
                res.forEach(element => {
                    owners.push(element[1].properties.metadata)
                  });
                this.rights = owners.includes(this.account) ? 0 : 1;
            }
            this.isLoading = false;
        })
    }
    setLandStatus() {
        if (!this.baseData.hasOwnProperty('introStatus')) {this.baseData.introStatus = 1}
        if (!this.baseData.hasOwnProperty('logoStatus')) {this.baseData.logoStatus = 1}
    }

    updateData($event) {
        this.baseData = Object.assign(this.baseData, $event);
    }

    changeLanguage() {
        const language = this._matDialog.open(LanguageDialog, {
            panelClass: 'lands-add-dialog',
            width: 'calc(100vw - 30px)',
            maxWidth: '1110px',
            data: {
                name: this.language,
                // languages: this.baseData.languages
            }
        })
        language.afterClosed().subscribe(result => {
            if (result) {
                this.language = result ? result : 'en';
            }
        })
    }


}