import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private readonly URL = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }


  public listAllUSers():Observable<any>{
    return this.http.get(this.URL);
  }


  public getById(id:number){
    return this.http.get(this.URL+"/"+id);
  }


  public update(id:number,objeto:Object){
    return this.http.put(this.URL+"/"+id,objeto);
  }

  
  public create(objeto:Object){
    return this.http.post(this.URL,objeto);
  }


}
