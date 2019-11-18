import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes: any[];
  constructor(private foodService: FoodService) {}
  doSearch(topic: string) {
    // call news service, pass it the topic from the form,
    // wait for the data to come back, then get the articles array
    // from the data and set it on the component articles array.
    this.foodService.getRecipe(topic).subscribe(data => {
      this.recipes = data.hits;
    });
  }
  ngOnInit() {}
}
