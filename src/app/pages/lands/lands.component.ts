import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ContractService } from 'src/app/service/contract.service';
import { Cypher } from './cypher';
import { BehaviorSubject, Subject } from 'rxjs';
import { BaseData } from './baseData';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.less']
})
export class LandsComponent implements OnInit {
  account: string = '';

  name: string; // 通过url获取land名
  // p | owner | verify : detail页-公共，私有，官方
  // o | v : detail简化映射页
  suffix: 'p' | 'owner' | 'verify' | 'v' | 'o' = 'v'; 
  isSimplify: boolean = false; // 是否显示为简化页
  edit: boolean = false; // 是否编辑状态
  editTab: '1' | '2' | '3' = '1' // 编辑tab，1,2,3 - basic | link | mapping;
  needPermission: boolean = false; // 是否需要授权

  seconds: number = 3; // 倒计时

  baseData: BaseData = new BaseData();


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private contractService: ContractService,
    private httpService: HttpService
  ) { 
    this.activeRoute.params.subscribe(async (res) => {
      let nameArray = res.name.split('.');
      this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
      this.contractService.account$.subscribe(async (account) => {
        this.account = account;
      })
      this.suffix = nameArray[1] || 'p';
      switch (this.suffix) {
        case 'o':
          this.isSimplify = true;
          this.getShareInfo();
          break;
        case 'owner':
          this.isSimplify = false;
          this.getLandInfo();
          break;
        case 'v':
          this.isSimplify = true;
          this.getProfileInfo();
          break;
        case 'verify':
          this.isSimplify = false;
          this.getProfileInfo();
          // this.isNeedPermission();
          break;
        case 'p':
          this.isSimplify = false;
          break;
        default:
          break;
      }
    })
    
  }

  ngOnInit(): void {

    
    this.activeRoute.data.subscribe(data => {
      this.edit = data.edit;
      // TODO 
    })

  }

  async isNeedPermission() {
    this.contractService.account$.subscribe(async (account) => {
      this.account = account;
      if (this.account === this.name) {
        const isLogin:any = await this.httpService.test();
        this.needPermission = isLogin.code !== 0;
      } 
      this.needPermission = false;
    })
    
  }



  getProfileInfo() {
    const params: Cypher = {
      pNodeProperties: {name: this.name}
    }
    let matchQuery = this.httpService.getSingleNode(params)
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      if (res.length === 0) {
        this.baseData = {name: this.account};
      } else {
        this.baseData = res[0][0].properties;
        this.baseData.id = res[0][0].id;  
      }
    })
  }

  getShareInfo() {
    const params: Cypher = {
      relationType: 'Mint',
      cNodeProperties: {name: this.name, mapping: 1}    
    }   
    let matchQuery = this.httpService.getMappingNode(params)
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      console.log(res)
      if (res.length === 0) {
        let timeDown = setInterval(() => {
          this.seconds--;
          if (this.seconds === 0) {
            console.log(this.seconds)
            clearInterval(timeDown);
            this.router.navigate(['/detail', this.name+'.owner']);
          }
        }, 1000)
      } else {
        this.baseData = res[0][0].properties;
        this.baseData.id = res[0][0].id;
        // this.baseData.name = this.name;
      }
      
    })
  }

  getLandInfo() {
    const params: Cypher = {
      pNodeProperties: {name: this.name}    
    }   
    let matchQuery = this.httpService.getSingleNode(params)
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      if (res.length === 0) {
        
      } else {
        this.baseData = res[0][0].properties;
        this.baseData.id = res[0][0].id;
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
    this.router.navigate(urlArray);
  }

  switchTab(suffix) {
    let urlArray = this.router.url.split('/')
    urlArray.shift();
    urlArray[1] = urlArray[1].split('.')[0] + '.' + suffix
    console.log(urlArray)
    this.router.navigate(urlArray)
  }

  cancelEdit() {
    let urlArray = this.router.url.split('/')
    urlArray.shift();
    urlArray.pop();
    this.router.navigate(urlArray)
  }

}
