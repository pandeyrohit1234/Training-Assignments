import { Component, OnInit } from '@angular/core';
import { IProd } from '../product/iProd';
import { ProductComponent } from '../product/product.component';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  product: IProd;
  //[x: string]: any;
  

  constructor(private data: SenddataService) { }

  ngOnInit(): void {
    this.data.product$.subscribe((c ) => this.product=c);
    
  }

}
