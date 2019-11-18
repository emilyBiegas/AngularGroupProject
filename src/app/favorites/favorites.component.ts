import { Component, OnInit } from "@angular/core";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { FoodService } from "../services/food.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites = RecipeListComponent.favorites;
  static favorites: any;
  constructor(private foodService: FoodService) {}

  deleteFavorite(favorite) {
    this.favorites.splice(favorite, 1);
  }

  ngOnInit() {
    this.favorites = this.foodService.getFavorite();
    console.log("favoritesComponent", this.favorites);
  }
}
