import { Component, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sucess-modal',
  template: `
  <div class="modal-header">
    <p class="modal-title fw-bold fs-1">{{ title }}</p>
  </div>
  <div class="modal-body fs-5 text-break">
    {{ message }}
  </div>
  <div class="modal-footer ">
    <button type="button" class="btn btn-lg btn-primary" (click)="activeModal.close('Close click')">Close</button>
  </div>
  `
})
export class SucessModalComponent {

  @Input() title = 'MINT SUCCESS';
  @Input() message = "Congratulations! U have successfully obtained the land. And once you mint it, you can own it forever.  Not only can u trade the land in Opensea, but also has the editing rights of it. What's more, you can have opportunities to receive oland incentive shares in the future.";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
