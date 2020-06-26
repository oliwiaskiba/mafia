import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material';
import {Killer} from '../killer';
import {DialogOrderComponent} from '../killer/dialog-order/dialog-order.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px'
    });
  }

  login() {
    this.authService.login(
      {
        login: this.f.login.value,
        password: this.f.password.value
      }
    )
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.openErrorDialog();
        }
      });
  }

  getMessage() {
    if (this.loginForm.controls['login'].hasError('required') || this.loginForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
  }
}
