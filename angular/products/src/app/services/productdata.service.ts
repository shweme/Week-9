import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  
  constructor(private http:HttpClient) { 

  }
  add(product:Products){
    return this.http.post<any>('http://localhost:3000/add',  product );
  }
  getList(){
    return this.http.get<any>('http://localhost:3000/getList');
  }

  getItem(productID){
    return this.http.post<any>('http://localhost:3000/getItem',  {'productid':productID} );
  }
  update(product:Products){

    return this.http.post<any>('http://localhost:3000/update',  product );
  }
  deleteItem(productID){
    return this.http.post<any>('http://localhost:3000/deleteItem',  {'productid':productID} );
  }
  validID(productID){
    return this.http.post<any>('http://localhost:3000/validID',  {'id':productID} );
  }
  /*getproductcount(){
    return this.http.get<any>('http://localhost:3000/prodCount');
  }*/
}
