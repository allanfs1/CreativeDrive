import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  @ViewChild('formsValidar',{static:true}) formsValidar:NgForm | undefined;

  public id?:number;
  public name?:string;
  public password?:string;
  public CPF?:string;
  public email?:string;
  public admin?:string;
  public login?:string;
  public profile?:string;

  constructor() { }

  ngOnInit(): void {

  }

/**
 * 
 * @param id 
 * @returns void
 */
  public update(id:number){
    console.log(this.name);
  }

}
