import { Component, OnInit,Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import {IProd} from './IProd';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  //@Input() count: number=0;
  products : IProd[] = [];
  constructor( private dataserviceservice:DataserviceService) { }

  ngOnInit(): void {
   // this.products=this.getProduct();
   this.products = this.dataserviceservice.getProduct();
  }
  searctext:string;
  filterprice:number;
  
}
