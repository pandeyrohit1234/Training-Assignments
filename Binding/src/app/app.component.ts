import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  isDataBindingVisible = true;
  isProductComponentVisible = false;
  showPurchase=false;
  showdemo() :void
  {  
    this.isDataBindingVisible = true;
    this.isProductComponentVisible = false;
    this.showPurchase=false;
  }
 
  showProductComponent(): void {
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = true;
    this.showPurchase=false;
  }
  showpurchase(): void{
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = false;
    this.showPurchase=true;
    
  }
 
}