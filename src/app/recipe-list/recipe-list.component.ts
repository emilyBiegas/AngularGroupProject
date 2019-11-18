import { Component, OnInit, Input, EventEmitter } from "@angular/core";
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
  favorite: boolean = false;
  favorites: any[] = [];
  static favorites: any[];

  // filterText: string = "";

  constructor(private foodService: FoodService) {}

  addFavorite(recipe) {
    recipe.favorite = true;
    this.favorites.push(recipe);
    console.log(this.favorites);
    this.foodService.setFavorite(this.favorites);
  }

  // filter() {
  //   if (!this.filterText) {
  //     return this.recipes;
  //   }

  //   let match = this.filterText.toLowerCase();
  //   return this.recipes.filter(item => item.includes(match));
  // }

  ngOnInit() {
    // console.log(this.recipes);
    console.log(this.favorites);
    this.foodService.getRecipe(this.criteria);
  }
}
