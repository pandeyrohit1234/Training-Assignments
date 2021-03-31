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
  showdemo() :void
  {
    this.isDataBindingVisible = true;
    this.isProductComponentVisible = false;
  }
 
  showProductComponent(): void {
    this.isDataBindingVisible = false;
    this.isProductComponentVisible = true;
  }
 
}