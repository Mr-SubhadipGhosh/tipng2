import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  constructor (
    //private http: Http
  ) {}

  getUser() {
    return "some string";
    //this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    //.map((res:Response) => res.json());
  }

}