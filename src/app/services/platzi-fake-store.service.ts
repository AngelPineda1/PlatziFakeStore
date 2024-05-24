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

  getCategories():Observable<any>{
    return this.http.get('https://api.escuelajs.co/api/v1/categories');
  }
  Delete(id:number){
    console.log(id)
    console.log(`${this.apiUrl}/${id}`)
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  update(product: any){
    console.log(product)
    return this.http.put(`${this.apiUrl}/${product.id}`,product)

  }
}
