import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass']
})
export class AuthDialogComponent implements OnInit {
  // @Input('auth-mode') authMode: 'login' | 'register' = 'login';

  constructor(public bsModalRef: BsModalRef) { }

  // isLoginMode(){return this.authMode == 'login'}
  // isRegisterMode(){return this.authMode == 'register'}

  ngOnInit() {
  }

}
