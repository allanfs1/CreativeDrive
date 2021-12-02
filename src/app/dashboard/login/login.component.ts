import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Sessions } from '../shared/Model/Sessions';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formsValidar',{static:true}) formsValidar:NgForm | undefined;
  
  public hide:boolean= true;
  public name:string;
  public password:string;
  public erro: string;
  public dataUser:Sessions;

  constructor(private service:UserServiceService,private rotas:Router) { }

  ngOnInit(): void {
    this.service.valid("/dashboard");
  }


 /**
  * 
  * @param name 
  * @returns observable
  */
   public selectUser(name:string){
    this.dataUser = new Sessions();
    this.service.getById(1).subscribe(res => {    
       this.dataUser.id = res["id"]
       this.dataUser.name = res["name"]
       this.dataUser.rule = res["profile"]
       this.service.createSession(this.dataUser);
    });
   }

 /**
  * Simular uma autenticação
  */
  public auth(){
    if(this.formsValidar){ 
       let obj:object = {
          "name":this.name,
          "password":this.password
       };  
       let auth = this.service.auth(obj); 
       if(auth === true){
         this.selectUser(this.name);
         this.rotas.navigate(["/dashboard"]);
       }else{
        this.erro = "Nome de usuário e senha ivalida";
        this.rotas.navigate(["/login"]);
       }
    }
  
  }

}
