import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'mappro';
Username:any=""
Password:any=""
baseUrl:any= 'http://localhost:4300'

constructor(private http: HttpClient) { }
  login(){
  let obj={
    "name":this.Username,
    "password":this.Password
  }
  console.log("Data",obj)


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
    this.http.post(this.baseUrl+"/login",obj,httpOptions).subscribe((result:any)=>{
console.log("DATA",result)
    })
  }
  
}