import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-logout-board',
  templateUrl: './logout-board.component.html',
  styleUrls: ['./logout-board.component.less']
})
export class LogoutBoardComponent implements OnInit {



  @Input() defaultInfo:any = null;

  constructor() {}

  ngOnInit(): void {

  }
  

}
