import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {

  }

  public type = 'password';
  public showPass = false;
  showPassword() {
     this.showPass = !this.showPass;
     if(this.showPass){
       this.type = 'text';
     } else {
       this.type = 'password';
     }
  }


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  goToHomePage() {
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
