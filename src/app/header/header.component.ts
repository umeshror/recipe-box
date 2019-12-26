import {Component, OnInit} from '@angular/core';
import {RecipeApiService} from "../recipes/recipe-api.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private recipeApiService: RecipeApiService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  logout() {
    this.authService.logout()
  }

  saveData() {
    this.recipeApiService.saveRecipes();
  }

  fetchData() {
    this.recipeApiService.fetchRecipes().subscribe();
  }

}
