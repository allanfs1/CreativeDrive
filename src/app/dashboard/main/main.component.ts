import { Component, OnInit } from '@angular/core';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public service:UserServiceService) { }

  public date:Date = new Date();
  public usersRes:ModelUsers[] = [];
  public erro:string = '';

  ngOnInit(): void {
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
  


}
