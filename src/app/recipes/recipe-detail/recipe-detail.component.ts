import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {

               }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  onAddToShoppingList(){
    console.log("Adding Ingredients to Shopping List");

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

    // this.recipe.ingredients.forEach(element => {
    //   this.shoppingListService.addIngredient(element);
    // });
    //this.shoppingListService.ingredientsChanged.emit(this.recipe.ingredients);
  }
}
