import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlooComponent } from './aloo/aloo.component';
import { AttributedemoComponent } from './attributedemo/attributedemo.component';
import { ErrorComponent } from './error/error.component';
import { HellowComponent } from './hellow/hellow.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SenddataService } from './senddata.service';
import { SharedataComponent } from './sharedata/sharedata.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'databinding',component:AlooComponent},
  {path:'products',component:ProductComponent},
  {path:'masterdetail',component:PurchaseComponent},
  {path:'sharedata',component:SharedataComponent},
  {path:'errorhandler',component:ErrorComponent},
  {path:'Attributedemo',component:AttributedemoComponent},
  {path:'',redirectTo: 'home',pathMatch :'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
