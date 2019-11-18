import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { FavoritesComponent } from "../favorites/favorites.component";
const API_KEY = "a30e2cfbb73fc3dea624656c24d5e8ee";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  recipes = SearchCriteriaComponent.recipes;
  private favorites: any[] = [];
  constructor(private http: HttpClient) {}

  getRecipe(criteria: string): Observable<any> {
    return this.http.get(
      "http://api.edamam.com/search?app_id=2f9c222e&app_key=a30e2cfbb73fc3dea624656c24d5e8ee",
      {
        params: {
          q: criteria
        }
      }
    );
  }

  getFavorite(): any[] {
    return this.favorites;
  }

  setFavorite(favorites): void {
    this.favorites = favorites;
    console.log("hi", this.favorites);
  }
}
