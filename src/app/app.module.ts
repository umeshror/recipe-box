import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ShoppingListService} from "./shopping-list/utils/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./recipes/utils/recipe.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {RecipeModule} from "./recipes/recipe.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthComponent} from "./auth/auth.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
