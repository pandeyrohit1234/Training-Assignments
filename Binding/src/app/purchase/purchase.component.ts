import { Component, OnInit } from '@angular/core';
import { IPurchaseitem } from './IPurchaseitem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchases : IPurchaseitem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.purchases = this.getPurchase();
  }
  
   
  
  getPurchase(): IPurchaseitem[] {
    return [
      {
        PurchaseID :1,
        Name : "Purchase for batch one",
        Date : "09-08-2020",
        VenderName : "Taazaa",
        Item : [{
          
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
          }
        ]
      },
      {
        PurchaseID :2,
        Name : "Purchase for batch two",
        Date : "01-08-2020",
        VenderName : "google",
        Item : [{
          
          Id:1,
          Title : "Pen",
          Price :45,
          ExpiryDate :"27-11-2021",
          isInstock : false,
          Quantity :2
        },
        {
          Id:2,
          Title : "cycle",
          Price :25,
          ExpiryDate :"14-02-2021",
          isInstock : false,
          Quantity: 4
        }]
      },
      {
        PurchaseID :3,
        Name : "Purchase for batch three",
        Date : "09-08-2020",
        VenderName : "Tata",
        Item : [
          {
          
            Id:1,
            Title : "Pencil",
            Price :55,
            ExpiryDate :"17-02-2021",
            isInstock : false,
            Quantity :2
          },
          {
            Id:2,
            Title : "Camera",
            Price :65,
            ExpiryDate :"11-02-2021",
            isInstock : true,
            Quantity: 4
          }
        ]
      } 
    ]
  }



}