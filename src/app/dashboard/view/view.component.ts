import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public service:UserServiceService,public route:ActivatedRoute) { }

  public id: number;
  public usersRes:ModelUsers ;
  public erro:string = '';
  public hide:boolean = true;
  
  ngOnInit(): void {
    this.service.valid("/view");
    this.id =  this.route.snapshot.params["id"];
    this.getId(this.id);
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
