import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ContractService } from 'src/app/service/contract.service';
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
    { title: 'Q&A', link: `${environment.microWebsite}detail?templateId=2`, navigation: false, isShow: true },
    { title: 'ABOUT', link: `${environment.microWebsite}detail?templateId=3`, navigation: false, isShow: true },
    { title: '3D OLAND', link: `http://test.unity.oland.info`, navigation: false, isShow: !environment.production},

  ]
  currentLink: string;

  // account: string = '';
  // account$: Observable<string>;
  alert: string = '';
  // chainStatus: boolean = true;


  account$: Observable<string>;
  chainStatus$: Observable<boolean>;

  constructor(

    private router: Router,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.account$ = this.contractService.account$;
    this.chainStatus$ = this.contractService.chainStatus$;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((res: NavigationEnd) => {
      this.currentLink = res.urlAfterRedirects;
    });
  }

  connect(): void  {
    this.contractService.connectAccount()
  }

  disconnect(): void {
    this.contractService.disconnectAccount().then(() => {
      localStorage.clear();
    })
  }

  switchChain(): void {
    this.contractService.switchChain()
  }

  link(link: any): void {
    this.isMenuCollapsed = true;
    if (link.navigation) {
      this.router.navigateByUrl(link.link);
    } else {
      global.window.location.href = link.link;
    }
  }



}
