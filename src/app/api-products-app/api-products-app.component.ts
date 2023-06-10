import { Component, OnInit } from '@angular/core';
import { ApiProductsServiceService } from '../service/api-products-service.service';

@Component({
  selector: 'app-api-products-app',
  templateUrl: './api-products-app.component.html',
  styleUrls: ['./api-products-app.component.css']
})
export class ApiProductsAppComponent implements OnInit {

  products : any[] = [];

  constructor( private _serviceProducts : ApiProductsServiceService ){}
  
  ngOnInit(): void {

    this.fillProducts();

  }

  fillProducts() {

    this._serviceProducts.getProducts().subscribe(data => {

      this.products = data;

    })

  }

}
