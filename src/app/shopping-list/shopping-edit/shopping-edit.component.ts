import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputField', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInputField', {static: true}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }

}
