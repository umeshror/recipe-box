import {Recipe} from "./recipe.model";
import {EventEmitter} from '@angular/core';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes = [new Recipe(
    'A Test Recipe',
    'description',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApfyIa9745tasU5E7H_CCdN_1FQ57VNdLaNXDUzipqgjeowztw&s'
  ),
    new Recipe(
      'Recipe 2',
      'Recipe 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApfyIa9745tasU5E7H_CCdN_1FQ57VNdLaNXDUzipqgjeowztw&s'
    )];

  getRecipes() {
    // return new array copy of this one
    return this.recipes.slice();
  }

}
