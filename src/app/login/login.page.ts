import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  passType: string = 'password';
  changePasswordType() {
    if (this.passType == 'password') {
      this.passType = 'text'
    } else {
      this.passType == 'password'
    }
  }

  ngOnInit() {
  }
  showPassword(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
