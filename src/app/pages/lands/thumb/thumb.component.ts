import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/service/http.service';
import { UploadImageComponent } from '../../components/upload-image/upload-image.component';
import { BaseData } from '../baseData';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.less']
})  
export class ThumbComponent implements OnInit {

  @Input() loader = false;
  @Input() suffix;
  @Input() baseData: BaseData;
  @Input() edit: boolean = false;


  constructor(
    private modalService: NgbModal,
    private httpService: HttpService
    ) { }

  ngOnInit(): void {
  }

  upload() {
    const modalRef = this.modalService.open(UploadImageComponent,
      {backdropClass: 'modal-mask', windowClass: 'dark', size: 'md', centered: true});
    modalRef.componentInstance.urlEvent.subscribe((url: string) => {
      const matchQuery = this.httpService.updateNodePropertyById(this.baseData.id, 'logo', url);
      this.httpService.toDatabase(matchQuery).subscribe(res => {
        this.baseData.logo = url;
        console.log(res)
      })
    })
  }

  changeLogoStatus(e) {
    const logoStatus = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateNodePropertyById(this.baseData.id, 'logoStatus', logoStatus);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      this.baseData.logoStatus = logoStatus;
      console.log(res)
    })
  }
}
