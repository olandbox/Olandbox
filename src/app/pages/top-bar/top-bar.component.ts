import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ContractService } from 'src/app/service/contract.service';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {

  isMenuCollapsed = true;
  menuList = [
    { title: 'HOME', link: `${environment.microWebsite}home`, navigation: false, isShow: true },
    { title: 'MINT', link: '/mint', navigation: true, isShow: true },
    { title: 'MY LAND', link: '/land', navigation: true, isShow: true },
    { title: 'BLUE SOUL', link: '/detail', navigation: true, isShow: true },
    { title: 'Q&A', link: `${environment.microWebsite}detail?templateId=2`, navigation: false, isShow: true },
    { title: 'ABOUT', link: `${environment.microWebsite}detail?templateId=3`, navigation: false, isShow: true },
    { title: '3D OLAND', link: `http://test.unity.oland.info`, navigation: false, isShow: !environment.production},

  ]
  currentLink: string = '';
  alert: string = '';
  account: string = '';
  account$: Observable<string>;
  chainStatus$: Observable<boolean>;

  constructor(

    private router: Router,
    private contractService: ContractService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.account$ = this.contractService.account$;
    this.chainStatus$ = this.contractService.chainStatus$;

    this.account$.subscribe(address => {
      this.account = address;
    })
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((res: NavigationEnd) => {
      this.currentLink = res.urlAfterRedirects;
      console.log(this.currentLink)
    });
  }

  async connect(): Promise<boolean>  {
    await this.contractService.connectAccount();
    if (this.account) {
      const noncestr: any = await this.httpService.noncestr(this.account);
      const hexMessage = await this.contractService.hexMessage(noncestr.data);
      const signature = await this.contractService.signature(hexMessage, this.account);
      if (signature) {
        await this.httpService.login(this.account, signature, hexMessage, noncestr.data);
      }
      return true;
    }
    return false;
  }

  disconnect(): void {
    this.contractService.disconnectAccount().then(() => {
      localStorage.clear();
    })
  }

  switchChain(): void {
    this.contractService.switchChain()
  }

  async link(link: any): Promise<void> {
    this.isMenuCollapsed = true;
    if (link.navigation) {
      if (link.link === '/detail') {
        if (!this.account) {
          const isConnect = await this.connect();
          !!isConnect ? this.router.navigate([link.link, this.account + '.verify']) : this.link(link);
        } else {
          this.router.navigate([link.link, this.account + '.verify']);
        }
      } else {
        this.router.navigateByUrl(link.link);
      }
    } else {
      global.window.location.href = link.link;
    }
  }



}
