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
  static recipes: any[];

  constructor(private foodService: FoodService, private router: Router) {}

  doSearch(criteria: string) {
    this.foodService.getRecipe(criteria).subscribe(data => {
      SearchCriteriaComponent.recipes = data.hits;
      this.router.navigate(["recipe-list"]);
      console.log(SearchCriteriaComponent.recipes);
    });
  }

  ngOnInit() {}
}
