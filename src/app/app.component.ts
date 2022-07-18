import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { url } from 'inspector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isShare: boolean = false;

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      
      const urlArray = event.url.split('/');
      let title = urlArray[1];
      
      if (title === 'detail') {
        const name = urlArray[2];
        const nameArray = name.split('.');
        const suffix = nameArray[1];
        if (suffix === 'v' || suffix === 'o') {
          this.isShare = true;
        } else {
          this.isShare = false;
        }
      }
      
      this.titleService.setTitle('OLand ' + title);
    })
    
    
  }

  ngOnInit(): void {

  }
}
