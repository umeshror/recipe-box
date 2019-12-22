import {Ingredient} from "../shared/models/ingredient.model";
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<void>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit();
  }
}
