import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/service/http.service';
import { ConfirmModalComponent} from '../../../pages/components/confirm-modal/confirm-modal.component'
import { UploadImageComponent } from '../../components/upload-image/upload-image.component';
import { BaseData } from '../baseData';
import { Cypher } from '../cypher';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';
import { AlertService } from 'src/app/service/alert.service';

interface ICommunity {
  id?: number;
  name: string;
  logo: string;
  url: string;
  status?: boolean;
  editable?: boolean;
  sort?: number;
}
class Community {
  id: number;
  name: string;
  logo: string;
  url: string;
  status: boolean = false;
  sort: number;
  editable: boolean = true;
  nameEditing: boolean = false;
  urlEditing: boolean = false;
  constructor(data: ICommunity) {
    Object.assign(this, data);
  }
}

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.less']
})
export class CommunityComponent implements OnInit, OnChanges, OnDestroy {

  name: string;
  @Input() loader = false;
  @Input() suffix;
  @Input() edit: boolean;
  @Input() baseData: BaseData;

  communities: Community[] = null;
  communitiesShow: Community[] = null;
  isAdding: boolean = false;
  serviceCommunityListen: any;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private httpService: HttpService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.serviceCommunityListen = this.httpService.communityListen.subscribe(value => {
      if (value === 1) {
        this.add();
        
      }
    })
  }
  ngOnDestroy(): void {
    this.serviceCommunityListen.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.baseData?.currentValue) {
      this.getLandCommunites()
    }
  }

  getLandCommunites() {
    const matchQuery = this.httpService.getLinks(this.baseData.id)
    this.httpService.getDatabase(matchQuery).subscribe(res => {
      this.communities = [];
      res.forEach((element, i) => {
        let itemStatus;
        if (!element[0].properties.hasOwnProperty('status')) {
          itemStatus = true;
        } else {
          itemStatus = +element[0].properties.status ? true : false;
        }
        const params: ICommunity = {
          id: element[0].id, 
          name: element[0].properties.name || 'name', 
          logo: element[0].properties.logo, 
          url: element[0].properties.url || 'url',
          status: itemStatus,
          editable: +element[0].properties.editable ? true : false,
          sort: element[0].properties.sort || res.length - i
        }
        this.communities.push(new Community(params));
      });
      this.communitiesShow = [];
      this.communitiesShow = this.communities.filter(element => element.status);
      
      setTimeout(() => {
        this.httpService.emitData(true);
      });
    })
  }

  drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.communities, event.previousIndex, event.currentIndex);
    this.communities.map((element:ICommunity, i:number) => {
      element.sort = this.communities.length - i;
    })
    let batch = [];
    this.communities.forEach((element:ICommunity) => {
      const item = {
        id: element.id,
        sort: element.sort
      }
      batch.push(item);
    })
    const matchQuery = this.httpService.updateLinkSort(batch);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length === this.communities.length) {
        this.alertService.create({
          body: 'The sequence has been adjusted successfully.',
          color: 'success',
          time: 2000
        })
      } else {
        this.alertService.create({
          body: 'Changing failed.',
          color: 'danger',
          time: 2000
        })
      }
    })
  }
 

  validateUrl(str) {
    if (str.indexOf("http://") == 0 || str.indexOf("https://") == 0) {
      return true;
    } else {
      return false;
    }
  }

  upload(index: number) {
    const modalRef = this.modalService.open(UploadImageComponent,
      {backdropClass: 'modal-mask', windowClass: 'dark', size: 'md', centered: true})
    modalRef.componentInstance.urlEvent.subscribe((url: string) => {
      const matchQuery = this.httpService.updateLand(this.communities[index].id, 'logo', url);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        this.communities[index].logo = url;
        if (res.length > 0) {
          this.alertService.create({
            body: 'Upload image successfully.',
            time: 2000,
            color: 'success'
          })
        } else {
          this.alertService.create({
            body: 'Changing failed.',
            time: 2000,
            color: 'danger'
          })
        }
      })
    })
  }

  editName(index: number) {
    this.communities[index].nameEditing = true;
    if (this.communities[index].name === 'name') {
      this.communities[index].name = '';
    }
  }
  blurName(index: number) {
    this.communities[index].nameEditing = false;
    if (this.communities[index].name === '') {
      this.communities[index].name = 'name';
    }
    if (this.communities[index].name === 'name') {
      this.communities[index].status = false;
      const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', this.communities[index].status ? 1 : 0, true);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        console.log(res)
      })
    }
    const matchQuery = this.httpService.updateLand(this.communities[index].id, 'name', this.communities[index].name);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.alertService.create({
          body: 'Changing successfully.',
          color: 'success',
          time: 2000
        })
      } else {
        this.alertService.create({
          body: 'Changing failed.',
          color: 'danger',
          time: 2000
        })
      }
    })
    
  }
  editLink(index: number) {
    this.communities[index].urlEditing = true;
    if (this.communities[index].url === 'url') {
      this.communities[index].url = '';
    }
  }
  blurLink(index: number) {
    this.communities[index].urlEditing = false;
    if (this.communities[index].url === '') {
      this.communities[index].url = 'url';
    }
    if (this.communities[index].url === 'url') {
      this.communities[index].status = false;
      const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', this.communities[index].status ? 1 : 0, true);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        console.log(res)
      })
    }
    const matchQuery = this.httpService.updateLand(this.communities[index].id, 'url', this.communities[index].url);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.alertService.create({
          body: 'Changing successfully.',
          color: 'success',
          time: 2000
        })
      } else {
        this.alertService.create({
          body: 'Changing failed.',
          color: 'danger',
          time: 2000
        })
      }
    })
  }


  changeCommunityStatud(e, index: number) {
    // if ((this.communities[index].name === 'name' || this.communities[index].url === 'url') && e.currentTarget.checked === true) {
    //   e.currentTarget.checked = false;
    //   return;
    // }
   
    this.communities[index].status = e.currentTarget.checked;
    const status = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', status, true);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.alertService.create({
          body: status ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
          color: 'success',
          time: 2000
        })
      } else {
        this.alertService.create({
          body: 'Changing failed.',
          time: 2000,
          color: 'danger'
        })
      }
    })
  }

  delete(index: number) {
    const modalRef = this.modalService.open(
      ConfirmModalComponent, 
      {backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true}
    );
    modalRef.componentInstance.deleteEvent.subscribe($event => {
      if ($event) {
        const matchQuery = this.httpService.deleteNodeById(this.communities[index].id)
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
          if (res.length === 0) {
            this.communities.splice(index, 1);
            this.alertService.create({
              body: 'Changing successfully.',
              time: 2000,
              color: 'success'
            })
          } else {
            this.alertService.create({
              body: 'Changing failed.',
              time: 2000,
              color: 'danger'
            })
          }
          
        })
        
      }
    })
  }

  add () {
    if (this.communities.length < 12) {
      let maxSort = 0;
      this.communities.forEach(item => {
        if (item.sort > maxSort) {
          maxSort = item.sort + 1
        }
      })
      const params: Cypher = {
        id: this.baseData.id,
        relationType: 'LinkTo',
        cNodeProperties: {
          url: 'url',
          name: 'name',
          logo: '',
          status: 1,
          editable: true,
          sort: maxSort
        }
      }
      const matchQuery = this.httpService.createCNodeById(params);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        const params: ICommunity = {
          id: res[0][0].id, 
          name: res[0][0].properties.name, 
          logo: res[0][0].properties.logo, 
          url: res[0][0].properties.url,
          status: res[0][0].properties.status,
          editable: res[0][0].properties.editable,
          sort: res[0][0].properties.sort
        }
        this.communities.unshift(new Community(params));
      })
    } else {
      this.alertService.create({
        body: 'Up to six custom links can be added.',
        color: 'warning',
        time: 2000
      })
    }
    this.httpService.emitCommunity(0);
  }


  

}
