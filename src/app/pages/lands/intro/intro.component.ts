import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { HttpService } from 'src/app/service/http.service';
import { BaseData } from '../baseData';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
  @Input() loader = false;
  @Input() suffix;
  @Input() baseData: BaseData;
  @Input() edit: boolean;
  intro: string;
  introEditing: boolean = false;

  

  constructor(
    private httpService: HttpService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

  }


  introEdit() {
    if (!this.edit) return;

    if (this.introEditing) {
      const matchQuery = this.httpService.updateLand(this.baseData.id, 'intro', this.intro);
      this.httpService.updateDatabase(matchQuery).subscribe(res => {
        this.baseData.intro = this.intro;
        if (res.length > 0) {
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
    } else {
      this.intro = this.baseData.intro;
    }

    this.introEditing = !this.introEditing
    
  }

  changeIntroStatus(e) {
    const introStatus = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateLand(this.baseData.id, 'introStatus', introStatus, true);
    this.httpService.updateDatabase(matchQuery).subscribe(res => {
      this.baseData.introStatus = introStatus;
      if (res.length > 0) {
        this.alertService.create({
          body: introStatus ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
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

}
