/**
 * Created by aurimasnorkus on 28/05/16.
 */
import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http:Http) {
  }

  private apiUrl = "http://www.osos.lt:8889/api/v1/groups/";  // URL to web API

  private method = {
    get: () => {
      this.http.get(this.apiUrl, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    post: (body:any) => {
      this.http.get(this.apiUrl, body, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    put: (body:any) => {
      this.http.get(this.apiUrl, body, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    delete: () => {
      this.http.get(this.apiUrl, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    patch: (body:any) => {
      this.http.get(this.apiUrl, body, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    head: () => {
      this.http.get(this.apiUrl, this.method.config()).subscribe(this.method.success, this.method.error)
    },
    //---------------------------------------------------------
    success: (res:Response) => {
      return res.json().data;
    },
    error: (error:any) => {
      console.log('Error', error);
    },
    config: () => {
      return localStorage.token ? {headers: {Authorization: 'JWT ' + localStorage.token}} : {headers: {}}
    }
  };


  init() {
    console.log('Api service init', this);
    window.api = this;
  }

  /**
   getHeroes (url): Observable<any> {
    return this.method.get(url)
  };

   private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
   private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }*/

}
