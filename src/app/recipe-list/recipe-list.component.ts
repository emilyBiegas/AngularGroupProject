import { Component, OnInit, Input } from "@angular/core";
import { FoodService } from "../services/food.service";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes = SearchCriteriaComponent.recipes;
  criteria: string = "";
  favorites: any[] = [];

  constructor(private foodService: FoodService) {}

  addFavorite(i) {
    this.favorites.push(i);
    console.log(this.favorites);
  }
  ngOnInit() {
    let recipes = SearchCriteriaComponent.recipes;

    this.recipes = SearchCriteriaComponent.recipes;
    console.log(this.recipes);
    this.foodService.getRecipe(this.criteria);
  }
}
