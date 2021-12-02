import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  public usersRes:ModelUsers ;
  public erro:string = '';
  public hide:boolean = true;
  public id:number;

  constructor(private service:UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.valid("/profile");
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
          this.erro = "Usuário não localizada.";
          break;
       case 500:
          this.erro = "Erro do Servidor";
          break;
      }
     }
    );    
}


}
