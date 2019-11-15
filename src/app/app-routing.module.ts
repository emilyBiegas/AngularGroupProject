import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoritesComponent } from "./favorites/favorites.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";

const routes: Routes = [
  { path: "favorites", component: FavoritesComponent },
  { path: "recipe-list", component: RecipeListComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "", redirectTo: "/recipe-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
