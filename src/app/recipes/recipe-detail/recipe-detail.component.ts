import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
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
