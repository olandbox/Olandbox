import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/service/alert.service';
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
  aliasEditing: boolean = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private httpService: HttpService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.httpService.emitData(true);
    });
  }

  upload() {
    const modalRef = this.modalService.open(UploadImageComponent,
      {backdropClass: 'modal-mask', windowClass: 'dark', size: 'md', centered: true});
    modalRef.componentInstance.urlEvent.subscribe((url: string) => {
      const matchQuery = this.httpService.updateLand(this.baseData.id, 'logo', url);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        this.baseData.logo = url;
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

  changeLogoStatus(e) {
    const logoStatus = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateLand(this.baseData.id, 'logoStatus', logoStatus, true);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.alertService.create({
          body: logoStatus ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
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
      this.baseData.logoStatus = logoStatus;
    })
  }

  editAlias() {
    this.aliasEditing = true;

  }
  blurAlias() {
    this.aliasEditing = false;
    const matchQuery = this.httpService.updateLand(this.baseData.id, 'alias', this.baseData.alias);
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

  cancelEdit() {
    this.router.navigate(['detail', this.baseData.name + '.' + this.suffix]);
  }
}
