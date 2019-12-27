import {NgModule} from '@angular/core';
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RecipeLandingComponent} from "./recipe-landing/recipe-landing.component";
import {RecipeRoutingModule} from "./recipe-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeLandingComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule {

}
