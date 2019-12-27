import {Component, OnInit} from '@angular/core';
import {Recipe} from "../utils/recipe.model";
import {RecipeService} from "../utils/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router"

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // make sure its number
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    );
  }

  toShoppingList() {
    this.recipeService.addIngreToShoppingList(this.recipe.ingredients);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);

  }

}
