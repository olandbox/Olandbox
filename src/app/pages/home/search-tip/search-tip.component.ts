import { Component, Input, OnInit } from '@angular/core';
import { LandInfo } from "../home.model";

@Component({
  selector: 'app-search-tip',
  templateUrl: './search-tip.component.html',
  styleUrls: ['./search-tip.component.less']
})
export class SearchTipComponent implements OnInit {

  @Input() landInfo: LandInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
