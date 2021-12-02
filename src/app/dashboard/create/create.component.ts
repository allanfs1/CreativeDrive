import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('formsValidar',{static:true}) formsValidar:NgForm | undefined;
  
  public id?:number;
  public name?:string;
  public password?:string;
  public CPF?:string;
  public email?:string;
  public login?:string;
  public profile?:any;


  public hide:boolean = true;
  public success: string='';
  public erro:string = '';

  constructor(public service:UserServiceService,private rota:Router) { }

  ngOnInit(): void {
    this.service.valid("/create");
  }
  
/**
 * Gerar uma id para objeto usuário
 * @returns 
 */
  public getId(){
    let current_date = (new Date()).valueOf().toString();
    let random = Math.ceil(Math.random() * 10000).toString();
    if(random != '0'){
      return  random;
    }else{
      return Math.ceil(Math.random() * 10000).toString();
    }
  }
  /**
 * 
 * @param id 
 * @returns void
 */
   public create(){
    let obj:object ={
      "id":this.getId(),
      "name":this.name,
      "password":this.password,
      "CPF":this.CPF,
      "login":this.login,
      "profile":this.profile,
    }; 
    if(this.formsValidar){
      this.service.create(obj).subscribe(res => {
        this.success = "Usuário criado com sucesso!"
      },
      erro =>{
        switch(erro.status) {
          case 400:
            this.erro = erro.error.mensagem;
            break;
          case 404: 
            this.erro = "404 A url não existe.";
            break;
         case 500:
            this.erro = "Erro 500 do Servidor";
            break;
        }
      });
      this.rota.navigate(["/dashboard"]);
    }
  }


}
