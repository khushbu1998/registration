import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private url: string="http://localhost:9089/welcome";

  public result: any;
  ngOnInit(): void {
    this.http.get(this.url)
.subscribe((resData)=>{
   this.result = resData
   console.log(this.result);
})
  
  }
}
