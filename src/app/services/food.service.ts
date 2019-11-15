import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "8de79bded75c396c973708b8ee39711a";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private http: HttpClient) {}
  getRecipe(recipe: string): Observable<any> {
    return this.http.get(
      `https://api.edamam.com/api/nutrition-details?app_id=`,
      {
        params: {
          q: recipe,
          apiKey: API_KEY,
          language: "en"
        }
      }
    );
  }
}
