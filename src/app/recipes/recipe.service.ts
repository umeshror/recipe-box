import {Recipe} from "./recipe.model";
import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesUpdated = new Subject<Recipe>();

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

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    // return new array copy of this one
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngreToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next();
  }
}
