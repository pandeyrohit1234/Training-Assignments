import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPurchaseitem } from '../purchase/IPurchaseitem';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit , OnChanges{
  @Input() PurchaseItem : IPurchaseitem;
  Price=0;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    console.log(this.PurchaseItem);
    this.PurchaseItem.Item.forEach(i =>{
      this.Price=this.Price +i.Price;
    })
  }

}
