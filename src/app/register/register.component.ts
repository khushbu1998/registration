import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../user-registration';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public user: UserRegistration = new UserRegistration()

  ngOnInit(): void {
  }

  mySubmit(regForm:any){

    console.log("form submitted",regForm);
    console.log(
    this.user.firstName,"---",this.user.lastName,"---",
    this.user.password,"---",this.user.confirmPassword,"---",
    this.user.gender,"---",this.user.email,"---",
    this.user.mobile,"---",this.user.securityQuestion);
    alert("form submitted");
  }

}
