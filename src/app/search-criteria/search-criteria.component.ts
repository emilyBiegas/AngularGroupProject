import { Component, OnInit, Output } from "@angular/core";
import { FoodService } from "../services/food.service";
import { Router } from "@angular/router";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes: [];
  ingredients: string[];
  ingredientLines: string[];
  backgroundImage: boolean = true;
  constructor(private foodService: FoodService, private router: Router) {}

  doSearch(form: any) {
    this.foodService
      .getRecipe(form.search, form.calories, form.diet)
      .subscribe(data => {
        this.recipes = data.hits;
      });
    this.backgroundImage = false;
  }

  ngOnInit() {}
}
