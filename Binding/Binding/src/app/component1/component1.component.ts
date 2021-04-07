import { Component, OnInit } from '@angular/core';
import { IProd } from '../product/iProd';
import { ProductComponent } from '../product/product.component';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  

input1: number=0;
  
product: IProd;
  

  constructor(private senddata: SenddataService) { }

  ngOnInit(): void {
   
    
  }
  sendData(){
    this.senddata.setPrice(this.input1)
  }

}
