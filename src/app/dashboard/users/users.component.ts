import { Component, OnInit } from '@angular/core';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(public service:UserServiceService) { }

  public date:Date = new Date();
  public usersRes:ModelUsers[] = [];
  public erro:string = '';


  ngOnInit(): void {
    this.service.valid("/users");
    this.getAll();
  }

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
