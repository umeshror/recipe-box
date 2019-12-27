import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../auth/utils/auth.guard";
import {RecipesComponent} from "./recipes.component";
import {RecipesResolverService} from "./utils/recipes-resolver.service";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeLandingComponent} from "./recipe-landing/recipe-landing.component";


const appRoutes: Routes = [
  {
    path: '',
    // path: 'recipes',
    canActivate: [AuthGuard],
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeLandingComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
