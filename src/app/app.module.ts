import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeappComponent } from './homeapp/homeapp.component';
import { ApiusersComponent } from './apiusers/apiusers.component';
import { ApiProductsAppComponent } from './api-products-app/api-products-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeappComponent,
    ApiusersComponent,
    ApiProductsAppComponent
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
