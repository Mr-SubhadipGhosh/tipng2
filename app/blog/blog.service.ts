import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
  constructor (
    private http: Http
  ) {
    this.baseUrl= "http://localhost:8989";
  }
baseUrl:string  = "";
  getpost() {
    return  this.http.get(this.baseUrl + `/posts/1`)
     .map((res:Response) => res.json());
  }
   getAll() {
        return this.http.get(this.baseUrl + '/posts').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.baseUrl + '/posts/' + id).map((response: Response) => response.json());
    }

    create(post: any) {
        return this.http.post(this.baseUrl + '/posts', post).map((response: Response) => response.json());
    }

    update(post: any) {
        return this.http.put(this.baseUrl + '/posts/' + post.id, post).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + '/posts/' + id).map((response: Response) => response.json());
    }

}