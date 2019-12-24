import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) ingredientForm: NgForm;
  // @ViewChild('nameInputField', {static: true}) nameInputRef: ElementRef;
  editMode = false;
  editIngredientIndex: number;
  editItem: Ingredient;
  subscription: Subscription;


  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.editIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIngredientIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  addIngredient(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIngredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.resetForm()
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editIngredientIndex);
    this.resetForm();
  }

  resetForm() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
