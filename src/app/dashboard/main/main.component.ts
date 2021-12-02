import { Component, OnInit } from '@angular/core';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 

  constructor(public service:UserServiceService,private rotas:Router) { }

  public success: string;
  public date:Date = new Date();
  public usersRes:ModelUsers[] = [];
  public erro:string = '';

  ngOnInit(): void {
    this.service.valid("/dashboard");
    this.getAll();
  }

  /**
   * get All 
   */
  public getAll(){ 
    this.service.listAllUSers()
    .subscribe(res => {
      this.usersRes = res
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
  


  redirectTo(uri:string,time:number){
    setTimeout( () =>{
      this.rotas.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.rotas.navigate([uri]));
     },time);
  }



  public removerRegister(id:number){ 
    //confirm("Deseja escluir esse registro!");
    this.service.remove(id)
    .subscribe(res => {
       this.success = "Registro removido com sucesso"
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
    this.redirectTo("/dashboard",300);
  }
  

}
