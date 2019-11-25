import { Component, OnInit, Input } from "@angular/core";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { FoodService } from "../services/food.service";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  @Input() recipes: any[];
  favorites: any;
  index: number;
  math: Math;
  constructor(private foodService: FoodService) {}

  setIndex(indexNumber: number) {
    this.index = indexNumber;
  }

  hideRecipe(indexNumber: number) {
    this.index = null;
  }

  deleteFavorite(i) {
    this.favorites.splice(i, 1);
  }

  ngOnInit() {
    this.favorites = this.foodService.getFavorite();
    console.log("favoritesComponent", this.favorites);
  }
}
