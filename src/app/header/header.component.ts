import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../dashboard/shared/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private service:UserServiceService) { }

  public title:string = "Painel do Usuário";
  public auth: any;

  ngOnInit(): void {
    this.auth = this.service.getSession();
  }

  public forgot(){
    this.service.forgot();
  }

}
