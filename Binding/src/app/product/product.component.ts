import { Component, OnInit } from '@angular/core';
import {IProd} from './IProd';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : IProd[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products=this.getProduct();
  }
    getProduct(): IProd[] {
      return [
        {
          Id:1,
          Title : "Pen",
          Price :45,
          ExpiryDate :"07-02-2021",
          isInstock : false,
          Quantity :2
        },
        {
          Id:2,
          Title : "Camera",
          Price :55,
          ExpiryDate :"18-02-2021",
          isInstock : true,
          Quantity: 4
        },
        {
          Id:3,
          Title : "Bike",
          Price :49,
          ExpiryDate :"09-02-2021",
          isInstock : false,
          Quantity: 5
        },
        {
          Id:4,
          Title : "Car",
          Price :60,
          ExpiryDate :"05-02-2021",
          isInstock : true,
          Quantity :7
        }
      ]
    }
  
  
  
  
}
