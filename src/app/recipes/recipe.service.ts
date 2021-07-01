import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png', [{name: 'Ingredient 1', amount: 2}]),
    new Recipe('A Test Recipe 2', 'This is also a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png', [{name: 'Ingredient 2', amount: 3}])
  ];

  getRecipes() {
    //Making a copy of the array via .slice() and returning it
    return this.recipes.slice();
  }
}
