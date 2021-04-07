import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProd } from './product/iProd';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  setprice(Input: number) {
    throw new Error('Method not implemented.');
  }
  product={
    Id : 1,
    Title : "Microsoft",
    Price : 1000,
    ExpiryDate: "02-03-2021",
    isInstock: true,
    Quantity: 2
  }
  product$ : BehaviorSubject <IProd>;
  //IProd: any;
  constructor() {
    this.product$ = new BehaviorSubject(this.product);
   }
setPrice(price:number) {
  this.product.Price=price;

}
updateProduct (p : IProd){
  this.product={
    ...p
  }
  this.product$.next(this.product);
}

  }
