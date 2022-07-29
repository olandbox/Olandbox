import { ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-lands-footer',
  templateUrl: './lands-footer.component.html',
  styleUrls: ['./lands-footer.component.less']
})
export class LandsFooterComponent implements OnInit, OnChanges, OnDestroy {

  @Input() tab;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.calScroll()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calScroll()
  }
  isAdding: boolean = false;
  isCoverFooter: boolean = true;
  serviceCommunityListen: any;
  servicDataListen: any;
  

  constructor(
    private router: Router,
    private httpService: HttpService,
    ) { }

  ngOnInit(): void {
    this.serviceCommunityListen = this.httpService.communityListen.subscribe(value => {
      if (value === 0) {
       this.isAdding = false;
      }
    });
    this.servicDataListen = this.httpService.dataListen.subscribe(isEnd => {
      if (isEnd) {
        this.calScroll();
      }
    })
  }
  ngOnDestroy(): void {
    this.serviceCommunityListen.unsubscribe();
    this.servicDataListen.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.isCoverFooter = true;
  }

  


  cancelEdit() {
    const url = decodeURI(this.router.url);
    let urlArray = url.split('/');
    urlArray.pop();

    urlArray[urlArray.length - 1] = urlArray[urlArray.length - 1].replace('.verify', '.v')
    this.router.navigate(urlArray)
  }

  addLink() {
    this.isAdding = true;
    this.httpService.emitCommunity(1);
  }

  calScroll() {
    // 文档距顶
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
      bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    // 文档高度
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
      bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    // 视窗高度
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
      windowHeight = document.documentElement.clientHeight;
    }else{
      windowHeight = document.body.clientHeight;
    }
    // 
    if (scrollTop + windowHeight + 60 >= scrollHeight) {
      this.isCoverFooter = true;
    } else {
      this.isCoverFooter = false;
    }
  }
    

}
