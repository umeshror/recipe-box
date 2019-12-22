import {Recipe} from "./recipe.model";
import {EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes = [new Recipe(
    'A Test Recipe',
    'Lorem Ipsum',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApfyIa9745tasU5E7H_CCdN_1FQ57VNdLaNXDUzipqgjeowztw&s',
    [
      new Ingredient('Bread', 12),
      new Ingredient('Eggs', 6),
    ]
  ),
    new Recipe(
      'Recipe 2',
      'Lorem Ipsum',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApfyIa9745tasU5E7H_CCdN_1FQ57VNdLaNXDUzipqgjeowztw&s',
      [
        new Ingredient('Capsicum', 2),
        new Ingredient('Tomato', 2),
      ]
    )];

  getRecipes() {
    // return new array copy of this one
    return this.recipes.slice();
  }

}
