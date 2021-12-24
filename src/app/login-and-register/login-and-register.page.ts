import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.page.html',
  styleUrls: ['./login-and-register.page.scss'],
})
export class LoginAndRegisterPage implements OnInit {

  loginForm: FormGroup;
  newUserForm: FormGroup;
  login:string
  password:string
  user: any[];
  results: any = false;

  constructor(
    private formBuilder: FormBuilder,
    private AccountsService: AccountsService,
    private router: Router,
    private navCtrl: NavController,
  ) { 

    this.loginForm  =  this.formBuilder.group({
      'username': '',
      'password': ''
  });

    this.newUserForm  =  this.formBuilder.group({
      'username': '',
      'password': '',
      'role':''
  });
  }

  ngOnInit() {
  }

  loginAsGuest(){
    localStorage.setItem('Id', "2");
    localStorage.setItem('Role', "guest");

    var guestId = localStorage.getItem('Id');

    console.log(guestId)
    this.navCtrl.navigateForward('/home');
  }

  loginAsAdmin(){
    localStorage.setItem('Id', "3");
    localStorage.setItem('Role', "admin");
  
    var adminId = localStorage.getItem('Id');

    console.log(adminId)
    this.navCtrl.navigateForward('/menu-for-admin');
  }

  onSignIn() {
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.password)
    this.AccountsService.retriveUserByUsername(
    this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
    this.results = data;
    console.log(data)
    console.log(this.results)
    if (this.results[0].auth)
    {
    this.router.navigateByUrl('/home');
    } else{
     console.log("Wrong username or password")
     }
    });
  }

  public onSignUp(){
    console.log(this.newUserForm.value);
    this.AccountsService.addNewUser(this.newUserForm.value).subscribe(res => {
      console.log('User Created');
      location.reload();
    })
  }

}
