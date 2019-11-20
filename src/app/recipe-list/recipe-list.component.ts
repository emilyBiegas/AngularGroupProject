import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { FoodService } from "../services/food.service";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: any[];

  criteria: string = "";
  favorite: boolean = false;
  favorites: any[] = [];
  hidden: boolean = true;
  index: number;
  math = Math;
  calories: string;
  diet: string;
  to: string;

  // filterText: string = "";

  constructor(private foodService: FoodService) {}

  addFavorite(recipe) {
    recipe.favorite = !recipe.favorite;
    if (recipe.favorite === true) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(recipe, 1);
    }
    this.foodService.setFavorite(this.favorites);
  }

  setIndex(indexNumber: number) {
    this.index = indexNumber;
  }

  hideRecipe(indexNumber: number) {
    this.index = null;
  }

  ngOnInit() {
    // console.log(this.recipes);
    console.log(this.favorites);
    this.foodService.getRecipe(
      this.criteria,
      this.calories,
      this.diet,
      this.to
    );
  }
}
