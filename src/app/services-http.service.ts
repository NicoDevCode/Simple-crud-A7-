import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {

  private Products = 'http://localhost:3000/products';  // URL to web api
  constructor(private  http: HttpClient) {
  }

  getProducs(): Observable<any> {
    return this.http.get(this.Products);
  }

  sendProducs(data): Observable<any> {
    return this.http.post(this.Products, data);
  }

  deleteProducs(id): Observable<any> {
    return this.http.delete(this.Products + '/' + id);
  }

  updateProducs(id, data): Observable<any> {
    return this.http.put(this.Products + '/' + id, data);
  }
}
