import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatziFakeStoreService {

  private apiUrl='https://api.escuelajs.co/api/v1/products';

  constructor(private http:HttpClient) { 

  }
  getProducts():Observable<any>{

    return this.http.get(this.apiUrl)
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  Post(product: any){

    return this.http.post(this.apiUrl,product)
  }
}
