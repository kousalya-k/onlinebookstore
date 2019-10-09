import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [{path:"",pathMatch:"full",component:CardComponent},
                        {path:"view/:id",component:ViewComponent},
                        {path:"cart",component:CartComponent},
                        {path:"place",component:OrderComponent},
                      {path:"summary",component:SummaryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
