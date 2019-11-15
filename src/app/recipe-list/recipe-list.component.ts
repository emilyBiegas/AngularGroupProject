import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  constructor(private foodService: FoodService) {}
  getRecipe() {
    this.foodService.getRecipe().subscribe(data => {
      this.recipes = data.hits;
      console.log(this.recipes);
    });
  }

  ngOnInit() {
    this.getRecipe();
  }
}
