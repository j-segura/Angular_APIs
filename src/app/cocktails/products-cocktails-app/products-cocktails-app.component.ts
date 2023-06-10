import { Component, OnInit } from '@angular/core';
import { ApiCocktailsServiceService } from 'src/app/service/api-cocktails-service.service';

@Component({
  selector: 'app-products-cocktails-app',
  templateUrl: './products-cocktails-app.component.html',
  styleUrls: ['./products-cocktails-app.component.css']
})
export class ProductsCocktailsAppComponent implements OnInit {

  cocktails : any[] = [];

  constructor( private _serviceCocktails : ApiCocktailsServiceService ){}

  ngOnInit(): void {

    this.fillCocktails();

  }

  fillCocktails() {

    this._serviceCocktails.getCocktails().subscribe(data=>{

      this.cocktails = data.drinks;
      console.log(this.cocktails);

    })

  }

}
