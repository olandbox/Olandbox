import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContractService } from 'src/app/service/contract.service';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';
import { BaseData } from '../baseData';
import { Cypher } from '../cypher';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.less']
})
export class MappingComponent implements OnInit, OnChanges {

  @Input() baseData: BaseData;
  baseUrl = environment.baseUrl;
  account: string = '';
  lands: any[] = [];
  loading: boolean = true;

  constructor(
    private contractService: ContractService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.contractService.account$.subscribe(account => {
      this.account = account;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.baseData.currentValue) {
      this.getLands()
    }
  }

  async getLands() {
    const params: Cypher = {
      relationType: 'Mint',
      id: this.baseData.id
    }
    const matchQuery = this.httpService.getChildNodesById(params)
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      res.forEach(item => {
        this.lands.push({
          id: item[0].id,
          name: item[0].properties.name,
          mapping: item[0].properties.mapping ? true: false
        })
      });
    })
  }

  mappingChange(e, item) {
    const status = e.currentTarget.checked ? 1 : 0;
    const matchQuery = this.httpService.updateNodePropertyById(item.id, 'mapping', status);
    this.httpService.toDatabase(matchQuery).subscribe(res => {
      console.log(res)
    })
  }

  copy(name: string) {
    navigator.clipboard.writeText(name);
  }

}
