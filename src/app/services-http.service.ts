import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {
  constructor(private  http: HttpClient) {
  }

  getSeeschweiler(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }
}
