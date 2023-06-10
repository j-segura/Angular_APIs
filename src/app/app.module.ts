import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeappComponent } from './homeapp/homeapp.component';
import { ApiusersComponent } from './apiusers/apiusers.component';
import { ApiProductsAppComponent } from './api-products-app/api-products-app.component';
import { HomeCocktailsAppComponent } from './cocktails/home-cocktails-app/home-cocktails-app.component';
import { NavAppComponent } from './cocktails/nav-app/nav-app.component';
import { ProductsCocktailsAppComponent } from './cocktails/products-cocktails-app/products-cocktails-app.component';
import { ContactCocktailsAppComponent } from './cocktails/contact-cocktails-app/contact-cocktails-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeappComponent,
    ApiusersComponent,
    ApiProductsAppComponent,
    HomeCocktailsAppComponent,
    NavAppComponent,
    ProductsCocktailsAppComponent,
    ContactCocktailsAppComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
