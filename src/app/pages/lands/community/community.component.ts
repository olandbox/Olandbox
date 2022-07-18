import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/service/http.service';
import { ConfirmModalComponent} from '../../../pages/components/confirm-modal/confirm-modal.component'
import { UploadImageComponent } from '../../components/upload-image/upload-image.component';
import { BaseData } from '../baseData';
import { Cypher } from '../cypher';

interface ICommunity {
  id?: number;
  name: string;
  logo: string;
  url: string;
  status?: boolean;
  editable?: boolean;
}
class Community {
  id: number;
  name: string;
  logo: string;
  url: string;
  status: boolean = false;
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
export class CommunityComponent implements OnInit, OnChanges {

  name: string;
  tab: string;
  @Input() loader = false;
  @Input() suffix;
  @Input() edit: boolean;
  @Input() baseData: BaseData;

  communities: Community[] = []

  constructor(
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.baseData?.currentValue) {
      this.getLandCommunites()
    }
  }

  getLandCommunites() {
    const params: Cypher = {
      relationType: 'LinkTo',
      id: this.baseData.id
    }
    const matchQuery = this.httpService.getChildNodesById(params)
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      this.communities = [];
      res.forEach(element => {
        const params: ICommunity = {
          id: element[0].id, 
          name: element[0].properties.name || 'name', 
          logo: element[0].properties.logo, 
          url: element[0].properties.url || 'url',
          status: element[0].properties.status ? true : false,
          editable: element[0].properties.editable ? true : false
        }
        this.communities.push(new Community(params))
      });
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
      const matchQuery = this.httpService.updateNodePropertyById(this.communities[index].id, 'logo', url);
      this.httpService.toDatabase(matchQuery).subscribe(res => {
        this.communities[index].logo = url;
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
    const matchQuery = this.httpService.updateNodePropertyById(this.communities[index].id, 'name', this.communities[index].name);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      console.log(res)
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
    const matchQuery = this.httpService.updateNodePropertyById(this.communities[index].id, 'url', this.communities[index].url);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      console.log(res)
    })
  }


  changeCommunityStatud(e, index: number) {
    if (this.communities[index].name === 'name' || this.communities[index].url === 'url') {
      e.currentTarget.checked = false;
      return;
    }
   
    const status = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateNodePropertyById(this.communities[index].id, 'status', status);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      console.log(res)
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
        this.httpService.toDatabase(matchQuery).subscribe(res => {
          console.log(res)
          this.communities.splice(index, 1)
        })
        
      }
    })
  }
  add() {
    if (this.communities.length < 10) {
      const params: Cypher = {
        id: this.baseData.id,
        relationType: 'LinkTo',
        cNodeProperties: {
          url: 'url',
          name: 'name',
          logo: '',
          status: 0,
          editable: true
        }
      }
      const matchQuery = this.httpService.createCNodeById(params);
      this.httpService.toDatabase(matchQuery).subscribe(res => {
        const params: ICommunity = {
          id: res[0][0].id, 
          name: res[0][0].properties.name, 
          logo: res[0][0].properties.logo, 
          url: res[0][0].properties.url,
          status: res[0][0].properties.status,
          editable: res[0][0].properties.editable
        }
        this.communities.push(new Community(params))
      })
    }
    
  }

  

}
