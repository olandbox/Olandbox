import { NgModule } from '@angular/core';
import {NgbAlertModule, NgbButtonsModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbAlertModule, NgbButtonsModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbCollapseModule
  ],
  exports: [
    NgbAlertModule, NgbButtonsModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbCollapseModule
  ]
})
export class AppBootstrapModule { }
