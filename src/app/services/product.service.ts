import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import{ Product } from '../models/product';

import { from } from 'rxjs';

@Injectable()
 
export class ProductService {

productList: AngularFireList<any>;
selectedProduct: Product = new Product();

constructor(private firebase: AngularFireDatabase) { }
  
 getProducts(){
    return this.productList = this.firebase.list('products');
 }

  insertProduct(product: Product){
    this.productList.push({
      nom_sala: product.nom_sala,
      ubicacion: product.ubicacion
    });
  }
  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      nom_sala: product.nom_sala,
      ubicacion: product.ubicacion
    });
  }
  deleteProduct($key: string){
    this.productList.remove($key);
  }
}



