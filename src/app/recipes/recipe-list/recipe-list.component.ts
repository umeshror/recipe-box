import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [new Recipe(
    'A Test Recipe',
    'description',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApfyIa9745tasU5E7H_CCdN_1FQ57VNdLaNXDUzipqgjeowztw&s'
  )];

  constructor() {
  }

  ngOnInit() {
  }

}
