import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private readonly URL = "http://localhost:3000/users";

  private username:string = "admin";
  private password:string = "123456";
  /**Auth JWT None*/
  private token:string;

  constructor(private http:HttpClient,private router?:Router) { }

  /**
   * 
   * @returns 
   */
  public listAllUSers():Observable<any>{
    return this.http.get(this.URL);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  public getById(id:number):Observable<any>{
    return this.http.get(this.URL+"/"+id);
  }

   /**
   * 
   * @param id 
   * @returns 
   */
    public getByName(name:string):Observable<any>{
      return this.http.get(this.URL+"/"+name);
    }

/**
 * 
 * @param id 
 * @param objeto 
 * @returns 
 */
  public update(id:number,objeto:Object):Observable<any>{
    return this.http.put(this.URL+"/"+id,objeto);
  }

  /**
   * 
   * @param objeto 
   * @returns 
   */
  public create(objeto:Object):Observable<any>{
    return this.http.post(this.URL,objeto);
  }

    /**
     * 
     * @param id 
     * @returns 
     */
  public remove(id:number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

/*********************************************USER*********************************************************** */
  /**
   * 
   * @param obj 
   */
  public auth(obj){
   if(obj != null){
       if(obj.name === this.username && obj.password === this.password){    
        return true;
       }
       return false;
   }
   return false;
  }

/**
 * Create session
 * @param reponseObj 
 */
 public createSession(reponseObj):void{
  if(reponseObj != null ){
     sessionStorage["auth"] = JSON.stringify(reponseObj);
  }
  
}

/**
 * get session
 * @returns 
 */
public getSession(){
  let session = sessionStorage["auth"];
  let data = session ? JSON.parse(session): [];
  return data;
}

/**
 * validação
 */
public valid(rota:string){
   let session = sessionStorage["auth"];
   let data = session ? true: false;
   if(data === true){
    this.router.navigate([rota]);
   }else{
    this.router.navigate(["/login"]);
   }

}

}
