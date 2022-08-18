import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseData } from '../baseData';

@Component({
  selector: 'app-thumb-simple',
  templateUrl: './thumb-simple.component.html',
  styleUrls: ['./thumb-simple.component.less']
})
export class ThumbSimpleComponent implements OnInit, OnChanges {
  @Input() suffix;
  @Input() baseData: BaseData;
  @Input() language: string = 'en';
  langBaseData: any;
  constructor() { }

  ngOnInit(): void {
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

}
