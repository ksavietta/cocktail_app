import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthDialogContentComponent } from '../auth-dialog-content/auth-dialog-content.component'


@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass']
})

export class AuthDialogComponent implements OnInit {
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }
  ngOnInit() {}

  openDialog(mode: 'login' | 'register' = 'login') {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      authMode: mode,
      title: 'Modal with component'
    };
    this.modalRef = this.modalService.show(AuthDialogContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }

  closeDialog() {
    this.modalRef.hide()
  }
}
