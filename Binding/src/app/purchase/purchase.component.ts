import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { IPurchaseitem } from './IPurchaseitem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchases : IPurchaseitem[]=[];
  constructor( private dataserviceservice : DataserviceService) { }

  ngOnInit(): void {
    this.purchases = this.dataserviceservice.getPurchase();
  }
  
   
 
  


}

