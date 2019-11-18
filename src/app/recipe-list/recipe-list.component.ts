import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipeSearch: any[];

  constructor(private foodSearchservice: FoodService) {}
  getRecipe(userInput: string) {
    this.foodSearchservice.getRecipe(userInput).subscribe(data => {
      this.recipeSearch = data.hits;
      console.log(this.recipeSearch);
    });
  }

  ngOnInit() {}
}
