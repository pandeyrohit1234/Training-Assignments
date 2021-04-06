import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProd } from '../product/iProd';
import { ProductComponent } from '../product/product.component';
import { SenddataService } from '../senddata.service';



function ageRangeValidator(min:number,max:number):ValidatorFn
{
  return (control: AbstractControl):{[key:string]: boolean} | null =>
  {
    if( control.value!==undefined && (isNaN(control.value)|| control.value<min ||control.value>max))
    {
      return {'priceRange' : true};
    }
    return null;
  };
}
function quantityRangeValidator(min:number,max:number):ValidatorFn
{
  return (control: AbstractControl):{[key:string]: boolean} | null =>
  {
    if( control.value!==undefined && (isNaN(control.value)|| control.value<min ||control.value>max))
    {
      return {'priceRange' : true};
    }
    return null;
  };
}
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  

input1: number=0;
productEditForm: FormGroup;
product: IProd;
min:number=0;
max:number=1000;
qmin:number=1;
qmax:number=1000;

  constructor(private senddata: SenddataService) { }

  ngOnInit(): void {
    this.senddata.product$.subscribe(data=>{
      this.product=data;

    })
    this.productEditForm=new FormGroup({
      Id :new FormControl(this.product?.Id,[Validators.required]),
      Title:new FormControl(this.product?.Title,[Validators.required]),
      Price:new FormControl(this.product?.Price,ageRangeValidator(this.min,this.max)),
      ExpiryDate :new FormControl(this.product?.ExpiryDate,[Validators.required]),
      Quantity:new FormControl(this.product?.Quantity,[Validators.required,quantityRangeValidator(this.qmin,this.qmax)]),
    }
    )
  }
  sendData(){
    this.senddata.setPrice(this.input1)
  }

  updateProduct(){
    this.senddata.updateProduct(this.productEditForm.value);
  }

 }

//  import { Component, OnInit } from '@angular/core';
//  import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
//  import { SenddataService } from '../senddata.service';
//  //import { IProduct } from '../product/Iproduct'; 
//  import { IProd } from '../product/iProd';
//  @Component({
//    selector: 'app-child1',
//    templateUrl: './child1.component.html',
//    styleUrls: ['./child1.component.css']
//  })
//  export class Child1Component implements OnInit {
  
//    input1: number = 0;
//    product: IProd;
//    constructor(private senddata: SenddataService) { }
//    productEditForm: FormGroup;
//    ngOnInit(): void {
//      this.senddata.product$.subscribe(data => {
//        this.product = data;
//      })
//      this.productEditForm = new FormGroup({
//        Id: new FormControl(this.product?.Id, [Validators.required]),
//        Titlnew FormControl(this.product?.Title, [Validators.required]),
//        Price: new FormControl(this.product?.Price, [Validators.required]),
//        ExpiryDate: new FormControl(this.product?.ExpiryDate, [Validators.required]),
//        Quantity: new FormControl(this.product?.Quantity, [Validators.required]),
//        inStock: new FormControl(this.product?.isInstock, [Validators.required]),
//      });
//    }
  
//    sendData() {
//      this.senddata.setPrice(this.input1);
//    }
  
//    updateProduct() {
//      this.senddata.updateProduct(this.productEditForm.value);
//    }
  
//  }
