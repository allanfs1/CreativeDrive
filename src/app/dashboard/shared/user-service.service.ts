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
}
