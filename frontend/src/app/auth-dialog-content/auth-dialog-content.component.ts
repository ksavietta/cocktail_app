import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-auth-dialog-content',
  templateUrl: './auth-dialog-content.component.html',
  styleUrls: ['./auth-dialog-content.component.sass']
})
export class AuthDialogContentComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
