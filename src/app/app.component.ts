import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { url } from 'inspector';
import { filter } from 'rxjs/operators';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isShare: boolean = false;

  constructor(
    private titleService: Title, 
    private router: Router, 
    private activedRoute: ActivatedRoute,
    private httpService: HttpService
    ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      console.log(event.url)
      let url = decodeURI(event.url).replace(/\s{2,}/g, ' ').toLocaleLowerCase();
      const urlArray = url.split('/');
      const title = urlArray[1];
      const shareReg = new RegExp("(.o|.v)$")

      if (title === 'detail') {
        const land = urlArray[2];
        if (shareReg.test(land)) {
          this.isShare = true;
        } else {
          this.isShare = false;
        }
      } else if (shareReg.test(title)) {
        this.isShare = true;
      } else {
        this.isShare = false;
      }
      
      this.titleService.setTitle('OLand ' + title);
    })
    
    
  }

  ngOnInit(): void {
    this.httpService.configFromDatabase.subscribe()
  }


}
