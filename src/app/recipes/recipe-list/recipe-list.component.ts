import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png', [{name: 'Ingredient 1', amount: 2}]),
    new Recipe('A Test Recipe 2', 'This is also a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png', [{name: 'Ingredient 2', amount: 3}])
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
