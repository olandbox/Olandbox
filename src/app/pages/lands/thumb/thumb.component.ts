import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/service/alert.service';
import { HttpService } from 'src/app/service/http.service';
import { UploadDialog } from '../../components/upload-dialog/upload-dialog';
import { UploadImageComponent } from '../../components/upload-image/upload-image.component';
import { BaseData } from '../baseData';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.less']
})  
export class ThumbComponent implements OnInit, OnChanges {

  @Input() loader = false;
  @Input() suffix;
  @Input() baseData: BaseData;
  @Input() edit: boolean = false;
  @Input() language: string = 'en';
  @Output() outData: EventEmitter<BaseData> = new EventEmitter<BaseData>();
  aliasEditing: boolean = false;
  langBaseData: any = {};

  urlName: string;

  constructor(
    private router: Router,
    private _matDialog: MatDialog,
    private httpService: HttpService,
    private alertService: AlertService,
    private activeRoute: ActivatedRoute
    ) {
      this.activeRoute.params.subscribe(params => {
        if (params.name) {
          let nameArray = decodeURI(params.name).split('.');
          this.urlName = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
        }
      })
     }

  ngOnInit(): void {
    setTimeout(() => {
      this.httpService.emitData(true);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.language) {
      const suffix = this.language === 'en' ? '' : `_${this.language}`;
      this.langBaseData = {
        logo: this.baseData['logo' + suffix],
        logoStatus: this.baseData['logoStatus' + suffix],
        name: this.baseData.name,
        alias: this.baseData['alias' + suffix],
      }
    }
  }

  get isVip() {
    if (this.baseData?.labels?.includes('WalletEntity')) {
      return false;
    } else {
      return true;
    }
  }

  updateBaseData() {
    const suffix = this.language === 'en' ? '' : `_${this.language}`;
    let data = {};
    data['logo' + suffix] = this.langBaseData.logo;
    data['logoStatus' + suffix] = this.langBaseData.logoStatus;
    data['name' + suffix] = this.langBaseData.name;
    data['alias' + suffix] = this.langBaseData.alias;
    this.outData.emit(data)
  }

  upload() {
    const uploadDialog = this._matDialog.open(UploadDialog, {
      panelClass: 'lands-add-dialog',
      width: 'calc(100vw - 30px)',
      maxWidth: '1110px'
    })
    uploadDialog.componentInstance.urlEvent.subscribe((url: string) => {
      const property = this.language === 'en' ? 'logo' : `logo_${this.language}`; 
      const matchQuery = this.httpService.updateLand(this.baseData.id, property, url);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        if (res.length > 0) {
          this.langBaseData.logo = url;
          this.updateBaseData()
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
    const property = this.language === 'en' ? 'logoStatus' : `logoStatus_${this.language}`; 
    const matchQuery = this.httpService.updateLand(this.baseData.id, property, logoStatus, true);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.updateBaseData()
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
      this.baseData[property] = logoStatus;
    })
  }

  editAlias() {
    this.aliasEditing = true;
  }
  blurAlias() {
    this.aliasEditing = false;
    const property = this.language === 'en' ? 'alias' : `alias_${this.language}`; 
    const matchQuery = this.httpService.updateLand(this.baseData.id, property, this.langBaseData.alias);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      if (res.length > 0) {
        this.updateBaseData()
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
