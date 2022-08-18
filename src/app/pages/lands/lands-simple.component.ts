import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Clipboard } from '@angular/cdk/clipboard';
import { AlertService } from "src/app/service/alert.service";
import { ContractService } from "src/app/service/contract.service";
import { HttpService } from "src/app/service/http.service";
import { CopyLinkModalComponent } from "../components/copy-link/copy-link.component";
import { BaseData } from "./baseData";
import { MatDialog } from "@angular/material/dialog";
import { ShareDialog } from "./lands-footer/lands-footer.component";
import { LanguageDialog } from "./language-dialog";

@Component({
    selector: 'app-lands-simple',
    templateUrl: './lands-simple.component.html',
    styleUrls: ['./lands-simple.component.less']
  })
export class LandsSimpleComponent implements OnInit{
    account: string = '';
    name: string; // 通过url获取land名
    suffix: string = ''; 
    isLoading: boolean = false;
    rights: -1 | 0 | 1 = -1; // 无人有权 | 我有权 | 别人有权编辑
    seconds: number = -1; // 倒计时
    baseData: BaseData = null;
    language: string = 'en';
    owners: string[] = [];
    
    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private contractService: ContractService,
        private httpService: HttpService,
        private alertService: AlertService,
        private _matDialog: MatDialog,
        private clipboard: Clipboard
    ) {

        const paramName = this.activeRoute.snapshot.params.name;
        if (paramName) {
            let nameArray = decodeURI(paramName).split('.');
            this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
            this.suffix = nameArray[1];
            if (this.suffix !== 'v' && this.suffix !== 'o') {
                this.router.navigate(['404'])
            }

            this.contractService.account$.subscribe(async (account) => {

                this.account = account;

                this.rights = this.owners.includes(this.account) ? 0 : 1;
            })
        } else {
            this.router.navigate(['404'])
        }
        

    }

    ngOnInit(): void {
        this.getLand();

    }    
    get objectStatus() {
        if (this.baseData === null || this.baseData === undefined ) {
          return -1;
        } else {
          return Object.keys(this.baseData).length;
        }
    }

    async getLand() {
        this.isLoading = true;
        this.baseData = null;
        if (this.suffix === 'v') { 
            const matchQuery = this.httpService.getLand('VerifyLand', this.name);
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
                    
                    let o = [];
                    res.forEach(element => {
                      o.push(element[1].properties.metadata)
                    });
                    this.owners = o;
                    this.rights = this.owners.includes(this.account) ? 0 : 1;
                }
                this.isLoading = false;
            })
        } else if (this.suffix === 'o') {
            let matchQuery = this.httpService.getMappingLand(this.name);
            this.httpService.getDatabase(matchQuery).subscribe(async (res) => {
                if (res.length === 0) {
                    this.seconds = 3;
                    this.rights = -1;
                    this.baseData = {};
                    let timeDown = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timeDown);
                        this.router.navigate(['/detail', this.name+'.owner']);
                    }
                    }, 1000)
                } else {
                    this.baseData = res[0][0].properties;
                    this.baseData.id = res[0][0].id;
                    this.baseData.languages = JSON.parse(this.baseData.languages || `"['${this.language}']"`);
                    this.baseData.labels = res[0][0].labels;
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
        } else {
            this.isLoading = false;
        }
    }
    setLandStatus() {
        if (!this.baseData.hasOwnProperty('introStatus')) {this.baseData.introStatus = 1}
        if (!this.baseData.hasOwnProperty('logoStatus')) {this.baseData.logoStatus = 1}
    }

    copy() {
        this.clipboard.copy(decodeURI(window.location.href));
        this.alertService.create({
            body: `Copy successfully, go and share your profile link`,
            color: 'success',
            time: 2000
        })
    }
    share() {
        const addRef = this._matDialog.open(ShareDialog, {
            panelClass: 'recommend-dialog',
            width: 'calc(100vw - 30px)',
            maxWidth: '546px'
        })
    }
    changeLanguage() {
        const language = this._matDialog.open(LanguageDialog, {
            panelClass: 'lands-add-dialog',
            width: 'calc(100vw - 30px)',
            maxWidth: '546px',
            data: {name: this.language, languages: this.baseData.languages}
        })
        language.afterClosed().subscribe(result => {
            if (result) {
                this.language = result ? result : 'en';
            }
        })
    }

    goDetail() {
        if (this.suffix === 'v') {
            if (this.rights === 0) {
                this.router.navigate(['detail', this.name + '.verify', 'edit']);
            } else {
                this.router.navigate(['detail', this.name + '.verify']);
            }
            
        }
        if (this.suffix === 'o') {
            this.router.navigate(['detail', this.baseData.name + '.verify']);
        }
      }
}