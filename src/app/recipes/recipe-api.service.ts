import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeApiService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://recipe-box-610fd.firebaseio.com/recipes.json', recipes)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }
}
