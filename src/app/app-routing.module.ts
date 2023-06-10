import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './homeapp/homeapp.component';
import { ApiusersComponent } from './apiusers/apiusers.component';
import { ApiProductsAppComponent } from './api-products-app/api-products-app.component';
import { HomeCocktailsAppComponent } from './cocktails/home-cocktails-app/home-cocktails-app.component';
import { ProductsCocktailsAppComponent } from './cocktails/products-cocktails-app/products-cocktails-app.component';
import { ContactCocktailsAppComponent } from './cocktails/contact-cocktails-app/contact-cocktails-app.component';

const routes: Routes = [
  { path:'', component: HomeappComponent },
  { path:'api/exercise/1/users', component:ApiusersComponent },
  { path:'api/exercise/2/products', component:ApiProductsAppComponent },
  { path:'api/exercise/3/cocktails/home', component:HomeCocktailsAppComponent },
  { path:'api/exercise/3/cocktails/products', component:ProductsCocktailsAppComponent },
  { path:'api/exercise/3/cocktails/contact', component:ContactCocktailsAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
