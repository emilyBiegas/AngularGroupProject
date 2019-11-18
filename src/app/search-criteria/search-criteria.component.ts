import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes: any[];
  constructor(private foodService: FoodService) {}

  doSearch(criteria: string) {
    this.foodService.getRecipe(criteria).subscribe(data => {
      this.recipes = data.hits;
      console.log(this.recipes);
    });
  }

  ngOnInit() {}
}
