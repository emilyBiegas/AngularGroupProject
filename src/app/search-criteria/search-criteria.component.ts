import { Component, OnInit } from "@angular/core";
import { FoodService } from "../services/food.service";
<<<<<<< HEAD
import { FormsModule } from "@angular/forms";
=======
>>>>>>> d4410ca4fe8f06dc4a0d9cfa1408d8b44615bb65
@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes: any[];
<<<<<<< HEAD
  constructor(private foodService: FoodService) {}
  doSearch(topic: string) {
    // call news service, pass it the topic from the form,
    // wait for the data to come back, then get the articles array
    // from the data and set it on the component articles array.
    this.foodService.getRecipe(topic).subscribe(data => {
      this.recipes = data.hits;
    });
  }
=======
  doSearch(criteria: string) {
    this.foodService.getRecipe(criteria).subscribe(data => {
      this.recipes = data.hits;
      console.log(this.recipes);
    });
  }
  constructor(private foodService: FoodService) {}

>>>>>>> d4410ca4fe8f06dc4a0d9cfa1408d8b44615bb65
  ngOnInit() {}
}
