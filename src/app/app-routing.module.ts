import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './homeapp/homeapp.component';
import { ApiusersComponent } from './apiusers/apiusers.component';
import { ApiProductsAppComponent } from './api-products-app/api-products-app.component';

const routes: Routes = [
  { path:'', component: HomeappComponent },
  { path:'api/exercise/1/users', component:ApiusersComponent },
  { path:'api/exercise/2/products', component:ApiProductsAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
