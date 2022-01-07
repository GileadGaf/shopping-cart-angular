import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {
    path: '', component: HomepageComponent, pathMatch: 'full'
  },
  {
    path: 'cart', component: CartComponent, pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
