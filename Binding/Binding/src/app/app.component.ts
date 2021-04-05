import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  c:string='yellow';
  title = 'Data Binding';
  isDataBindingVisible = true;
  isProductComponentVisible = false;
  showPurchase=false;
  showDirective=false;
  showData=false;

  showdemo() :void
  {  
    this.isDataBindingVisible = true;
    this.isProductComponentVisible = false;
    this.showPurchase=false;
    this.showData=false;
    this.showDirective=false;
  }
 
  showProductComponent(): void {
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = true;
    this.showPurchase=false;
    this.showData=false;
    this.showDirective=false;
  }
  showpurchase(): void{
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = false;
    this.showPurchase=true;
    this.showData=false;
    this.showDirective=false;
    
  }
  showdata(): void{
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = false;
    this.showPurchase=false;
    this.showData=true;
    this.showDirective=false;

  }
  showdirective(): void{
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = false;
    this.showPurchase=false;
    this.showData=false;
    this.showDirective=true;

  }
}