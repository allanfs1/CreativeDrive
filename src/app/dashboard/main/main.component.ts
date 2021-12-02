import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelUsers } from '../shared/Model/ModelUsers';
import { UserServiceService } from '../shared/user-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public spin: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public service:UserServiceService,private rotas:Router) { }

  public success: string;
  public date:Date = new Date();
  public usersRes:ModelUsers[] = [];
  public erro:string = '';
  public hide:boolean = true;
  dataSource: MatTableDataSource<ModelUsers>;
  displayedColumns: string[] = ['id', 'name', 'CPF', 'login','profile','email','password'];
  auth: any;

  ngOnInit(): void {
    this.service.valid("/dashboard");
    this.getAll();
    this.auth = this.service.getSession();
  }
  

 /**
  * Paginação
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * get All 
   */
  public getAll(){ 
    setTimeout(() => {
     this.service.listAllUSers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res)
        this.spin  = true
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

    }, 2000);
 
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
function createNewUser(arg0: number): any {
  throw new Error('Function not implemented.');
}

