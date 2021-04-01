import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlooComponent } from './aloo/aloo.component';
import { HellowComponent } from './hellow/hellow.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    AlooComponent,
    HellowComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseorderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
