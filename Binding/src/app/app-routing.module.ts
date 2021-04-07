import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlooComponent } from './aloo/aloo.component';
import { AsyncComponent } from './async/async.component';
import { AttributedemoComponent } from './attributedemo/attributedemo.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { ErrorComponent } from './error/error.component';
import { HellowComponent } from './hellow/hellow.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplayComponent } from './replay/replay.component';
import { RxjsComponent } from './rxjs/rxjs.component';
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
  {path:'rxjs',component:RxjsComponent},
  {path:'behaviour',component:BehaviourComponent},
  {path:'replay',component:ReplayComponent},
  {path:'async',component:AsyncComponent},
  {path:'',redirectTo: 'home',pathMatch :'full'},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
