import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCocktailsServiceService {

  private cocktails_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

  constructor(private http : HttpClient) {}

  public getCocktails() : Observable<any> {

    return this.http.get(this.cocktails_url);

  }

}
