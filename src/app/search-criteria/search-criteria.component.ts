import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes: any[];

  constructor(private foodService: FoodService, private router: Router) {}

  doSearch(criteria: string) {
    this.foodService.getRecipe(criteria).subscribe(data => {
      this.recipes = data.hits;
      console.log(this.recipes);
    });
  }
  navigate() {
    this.router.navigate(["recipe-list"]);
  }
  ngOnInit() {}
}
