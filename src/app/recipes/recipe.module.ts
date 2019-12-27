import {NgModule} from '@angular/core';
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeLandingComponent} from "./recipe-landing/recipe-landing.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeLandingComponent,
    RecipeEditComponent],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeLandingComponent,
    RecipeEditComponent]
})
export class RecipeModule {

}
