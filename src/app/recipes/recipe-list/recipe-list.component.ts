import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../utils/recipe.model";
import {RecipeService} from "../utils/recipe.service";
import {ActivatedRoute, Router} from "@angular/router"
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesUpdated.subscribe(
      () => {
        this.recipes = this.recipeService.getRecipes();
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
