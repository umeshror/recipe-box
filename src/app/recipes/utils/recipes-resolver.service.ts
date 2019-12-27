import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {RecipeApiService} from "./recipe-api.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private recipeApiService: RecipeApiService,
    private recipesService: RecipeService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.recipeApiService.fetchRecipes(); // return Observable and don’t subscribe
    } else {
      return recipes;
    }
  }
}
