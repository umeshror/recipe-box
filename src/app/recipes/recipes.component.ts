import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeItemSelected: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeItemSelected = recipe;
  }
}
