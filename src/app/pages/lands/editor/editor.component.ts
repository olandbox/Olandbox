import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/service/cookie.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  toEdit() {
    // const noncestrCookie = this.cookieService.getCookie('noncestr');
    // console.log(noncestrCookie)


    const url = this.router.url.split('?')[0];
    let urlArray = url.split('/')
    urlArray.shift();
    urlArray.push('edit')
    
    this.router.navigate(urlArray);
  }

  goLand() {
    this.router.navigate(['/land'])
  }
}
