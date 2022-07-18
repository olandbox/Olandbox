import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

  }


  introEdit() {
    if (!this.edit) return;

    if (this.introEditing) {
      const matchQuery = this.httpService.updateNodePropertyById(this.baseData.id, 'intro', this.intro);
      this.httpService.toDatabase(matchQuery).subscribe(res => {
        this.baseData.intro = this.intro;
        console.log(res)
      })
    } else {
      this.intro = this.baseData.intro;
    }

    this.introEditing = !this.introEditing
    
  }

  changeIntroStatus(e) {
    const introStatus = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateNodePropertyById(this.baseData.id, 'introStatus', introStatus);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      this.baseData.introStatus = introStatus;
      console.log(res)
    })
  }

}
