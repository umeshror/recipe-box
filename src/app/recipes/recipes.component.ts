import {Component, OnInit} from '@angular/core';
import {Recipe} from "./utils/recipe.model";
import {RecipeService} from "./utils/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [],

})
export class RecipesComponent implements OnInit {
  recipes : Recipe[];
  constructor() {
  }

  ngOnInit() {
  }
}
