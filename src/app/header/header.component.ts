import {Component} from '@angular/core';
import {RecipeApiService} from "../recipes/recipe-api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private recipeApiService: RecipeApiService){

  }

  saveData() {
    this.recipeApiService.saveRecipes();
  }

}
