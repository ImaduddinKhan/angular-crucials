import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Apples', 3),
      new Ingredient('Mangos', 4),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingreident: Ingredient){
    this.ingredients.push(ingreident);
  }

}
