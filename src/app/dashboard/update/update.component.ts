import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';

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
  public login?:string;
  public profile?:string;


  public usersRes:ModelUsers ;
  public erro:string = '';
  public hide:boolean = true;
  success: string;
  
  constructor(public service:UserServiceService,public route:ActivatedRoute,private rotas:Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"];
    this.getId(this.id);
  }

/**
 * 
 * @param id 
 * @returns void
 */
  public update(id:number){
    let obj:object ={
      "id":this.id,
      "name":this.name,
      "password":this.password,
      "CPF":this.CPF,
      "login":this.login,
      "profile":this.profile,
    }; 
    if(this.formsValidar){
      this.service.update(this.id,obj).subscribe(res => {
        this.success = "Atualizado com sucesso"
      },
      erro =>{
        switch(erro.status) {
          case 400:
            this.erro = erro.error.mensagem;
            break;
          case 404: 
            this.erro = "Notícia não localizada.";
            break;
         case 500:
            this.erro = "Erro do Servidor";
            break;
        }
      });
      this.rotas.navigate(["/update/"+this.id]);
    }
  }

  /**
 * selecy por id
 * @param id 
 * @returns void
 */
   public  getId(id:number){
    this.service.getById(id)
    .subscribe(res => {
      this.usersRes = res
      this.id       =  res["id"],
      this.name     =  res["name"],
      this.password =  res["password"],
      this.CPF      =  res["CPF"],
      this.login    =  res["login"],
      this.profile  =  res["profile"]
    },
    erro => {
      switch(erro.status) {
        case 400:
          this.erro = erro.error.mensagem;
          break;
        case 404: 
          this.erro = "Notícia não localizada.";
          break;
       case 500:
          this.erro = "Erro do Servidor";
          break;
      }
     }
    );    
}


}
