import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlooComponent } from './aloo/aloo.component';
import { HellowComponent } from './hellow/hellow.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { SharedataComponent } from './sharedata/sharedata.component';
import { AppRoutingModule } from './app-routing.module';
import { MyerrorhandlerService } from './myerrorhandler.service';
import { ErrorComponent } from './error/error.component';
import { AttributedemoComponent } from './attributedemo/attributedemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { CustompipePipe } from './custompipe.pipe';
import {​​​​​​​​MatTableModule}​​​​​​​​ from '@angular/material/table';
import { RxjsComponent } from './rxjs/rxjs.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { ReplayComponent } from './replay/replay.component';
import { AsyncComponent } from './async/async.component';



@NgModule({
  declarations: [
    AppComponent,
    AlooComponent,
    HellowComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseorderComponent,
    Component1Component,
    Component2Component,
    ChangecolorDirective,
    SharedataComponent,
    ErrorComponent,
    AttributedemoComponent,
    HomeComponent,
    LoginComponent,
    ProductsearchPipe,
    CustompipePipe,
    RxjsComponent,
    BehaviourComponent,
    ReplayComponent,
    AsyncComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatTableModule
   ],
  providers: [{provide:ErrorHandler,useClass:MyerrorhandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
