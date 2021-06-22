import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private url: string="http://localhost:9089/login";
  public userLogin: UserLogin= new UserLogin();
  public data:any;
  constructor(private http: HttpClient) { }



  

  mySubmit(regForm:any){

    console.log("form submitted",regForm);
    console.log(this.userLogin.email,"---",this.userLogin.password);
    this.http.post(this.url,this.userLogin)
    .subscribe((resData)=>{
    this.data = resData
  
 })
 console.log(this.data)
 
 alert("Logged In");
  }

  ngOnInit(): void {
  }

}
