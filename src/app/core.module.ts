import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {ShoppingListService} from "./shopping-list/utils/shopping-list.service";
import {RecipeService} from "./recipes/utils/recipe.service";
import {AuthInterceptorService} from "./auth/utils/auth-interceptor.service";

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
