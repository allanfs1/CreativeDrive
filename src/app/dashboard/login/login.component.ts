import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide:boolean= true;
  public name:string;
  public password:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
