import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/service/contract.service';
import { LandInfo } from "../home.model";

@Component({
  selector: 'app-minted',
  templateUrl: './minted.component.html',
  styleUrls: ['./minted.component.less']
})
export class MintedComponent implements OnInit {
  @Input() landInfo: LandInfo;

  constructor(private router: Router,
    private contractService: ContractService
    ) { }

  ngOnInit(): void {
  }

  goDetail(standardName) {
    this.router.navigate(['/detail', standardName + '.verify'])
  }

  async goOpensea() {
    let uri = await this.contractService.getOpenseaUriByName(this.landInfo.standardName);
    global.window.open(uri);
  }
}
