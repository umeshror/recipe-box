import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient.model";
import {ShoppingListService} from "./utils/shopping-list.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingeChangeSubject: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingeChangeSubject = this.shoppingListService.ingredientsChanged.subscribe(
      () => {
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );
  }

  ngOnDestroy() {
    this.ingeChangeSubject.unsubscribe()
  }

  editIngredient(index: number) {
    this.shoppingListService.editIngredient.next(index);
  }


}
