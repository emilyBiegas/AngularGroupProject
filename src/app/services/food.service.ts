import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { FavoritesComponent } from "../favorites/favorites.component";
const API_KEY = "a30e2cfbb73fc3dea624656c24d5e8ee";
const APP_ID = "2f9c222e";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  // recipes = SearchCriteriaComponent.recipes;
  private favorites: any[] = [];
  constructor(private http: HttpClient) {}

  getRecipe(
    criteria: string,
    calories: string,
    diet: string,
    to: string
  ): Observable<any> {
    return this.http.get("http://api.edamam.com/search?", {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: criteria,
        calories: `0-${calories}`,
        diet: diet,
        to: "30"
      }
    });
  }

  //http://api.edamam.com/search?app_key=a30e2cfbb73fc3dea624656c24d5e8ee&app_id=2f9c222e&q=pasta&calories=0-%7B%7Bcalories%7D%7D

  getFavorite(): any[] {
    return this.favorites;
  }

  setFavorite(favorites): void {
    this.favorites = favorites;
    console.log("hi", this.favorites);
  }
}
