import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ContractService } from 'src/app/service/contract.service';
import { Cypher } from './cypher';
import { BehaviorSubject, combineLatest, forkJoin, Subject } from 'rxjs';
import { BaseData } from './baseData';
import { filter } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.less']
})
export class LandsComponent implements OnInit {
  account: string = '';
  name: string; // 通过url获取land名
  isLoading: boolean = false;
  isSign: boolean = false; // 是否已签名
  rights: -1 | 0 | 1 = -1; // 无人有权 | 我有权 | 别人有权编辑
  // p | owner | verify : detail页-公共，私有，官方
  // o | v : detail简化映射页
  suffix: string = 'verify'; 
  isSimplify: boolean = false; // 是否显示为简化页
  edit: boolean = false; // 是否编辑状态
  editTab: '1' | '2' | '3' = '1' // 编辑tab，1,2,3 - basic | link | mapping;
  needPermission: boolean = false; // 是否需要授权

  seconds: number = -1; // 倒计时

  baseData: BaseData = null;


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private contractService: ContractService,
    private httpService: HttpService,
    private alertService: AlertService
  ) { 

    // let sub = combineLatest([this.activeRoute.params, this.contractService.account$])
    // sub.subscribe(([params, account]) => {
    //   if (params.name && account) {
    //     let nameArray = decodeURI(params.name).split('.');
    //     this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
    //     this.suffix = nameArray[1];
    //     if (this.suffix === 'o' || this.suffix === 'v') {
    //       this.isSimplify = true;
    //     } else {
    //       this.isSimplify = false;
    //     }

    //     if (this.suffix === 'o') {
    //       this.getMappingLand();
    //     } else {
    //       this.getLand();
    //     }

    //     if (this.suffix === 'verify' || this.suffix === 'v') {
    //       this.getEditor();
    //     }
    //   }
    // })


    this.activeRoute.params.subscribe(async (res) => {
      let nameArray = decodeURI(res.name).split('.');
      this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
      this.suffix = nameArray[1];
      if (this.suffix === 'o' || this.suffix === 'v') {
        this.isSimplify = true;
      } else {
        this.isSimplify = false;
      }

      if (this.suffix === 'o') {
        this.getMappingLand();
      } else {
        this.getLand();
      }
      this.contractService.account$.subscribe(async (account) => {
        this.account = account;
        if (this.account) {
          // 目前只有官方空间支持修改，所以需要拿到owner
          if (this.suffix === 'verify' || this.suffix === 'v') {
            this.getEditor();
          }
        }
      })
    })
    
  }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.edit = data.edit;
    })
    this.getIsLogin();
  }

  get objectStatus() {
    if (this.baseData === null || this.baseData === undefined ) {
      return -1;
    } else {
      return Object.keys(this.baseData).length;
    }
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
      }
    }
  }

  // .o
  getMappingLand() {
    let matchQuery = this.httpService.getMappingLand(this.name);
    this.httpService.getDatabase(matchQuery).subscribe(res => {
      if (res.length === 0) {
        this.seconds = 3;
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
        this.setLandStatus();
        
      }
    })
  }

  //
  getLand() {
    let label;
    if (this.suffix === 'owner') { label = 'OwnerLand' }
    if (this.suffix === 'verify' || this.suffix === 'v') { label = 'VerifyLand' }
    if (this.suffix === 'p') { 
      label = 'PublicLand' ;
      this.baseData = {};
      return 
    }
    this.baseData = null;

    const matchQuery = this.httpService.getLand(label, this.name);
    this.httpService.getDatabase(matchQuery).subscribe(res => {
      if (res.length === 0) {
        this.baseData = {};
      } else {
        this.baseData = res[0][0].properties;
        this.baseData.id = res[0][0].id;  
        this.setLandStatus();
        
      }
    })
  }

  setLandStatus() {
    if (!this.baseData.hasOwnProperty('introStatus')) {this.baseData.introStatus = 1}
    if (!this.baseData.hasOwnProperty('logoStatus')) {this.baseData.logoStatus = 1}
  }

  getEditor() {
    const ownerMatchQuery = this.httpService.getLandEditor('Verify', this.name);
    this.httpService.getDatabase(ownerMatchQuery).subscribe(res => {
      if (res.length === 0) {
        this.rights = -1;
      } else {
        this.rights = res[0][0].properties.name === this.account ? 0 : 1;
      }
    }) 
  }

  goDetail() {
    const url = this.router.url.split('?')[0];
    let urlArray = url.split('/');   
    urlArray.shift();
    if (this.suffix === 'v' || this.suffix === 'o') {
      urlArray[1] = this.baseData.name + '.verify'
    }
    // this.router.navigate(urlArray)
    this.router.navigate(['detail', this.baseData.name + '.verify']);
  }
  goEdit() {
    let urlArray = ['detail', this.name + '.verify', 'edit']
    this.router.navigate(urlArray);
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

  cancelEdit() {
    this.goDetail();
    // let urlArray = this.router.url.split('/')
    // urlArray.shift();
    // urlArray.pop();
    // this.router.navigate(urlArray)
  }

  goDc() {
    global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
  }

}
