import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "a30e2cfbb73fc3dea624656c24d5e8ee";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private http: HttpClient) {}
  getRecipe(): Observable<any> {
    return this.http.get(
      `http://api.edamam.com/search?q=chicken&app_id=2f9c222e&app_key=a30e2cfbb73fc3dea624656c24d5e8ee`,
      {}
    );
  }
}
