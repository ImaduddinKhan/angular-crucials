// import { Injectable } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';
// import { Recipe } from './recipe.model';
// import { Subject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
// import * as fromApp from '../store/app.reducer';

// @Injectable()
// export class RecipeService {
//   constructor(private store: Store<fromApp.AppState>) {}

//   recipeChanged = new Subject<Recipe[]>();
//   // private recipes: Recipe[] = [
//   //   new Recipe(
//   //     'A test Recipe',
//   //     'test recipe description',
//   //     'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
//   //     [new Ingredient('Meat', 3), new Ingredient('Garlic', 1)]
//   //   ),
//   //   new Recipe(
//   //     'A real Recipe',
//   //     'real recipe description',
//   //     'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
//   //     [new Ingredient('Onion', 3), new Ingredient('Tomato', 1)]
//   //   ),
//   // ];

//   private recipes: Recipe[] = [];

//   setRecipes(recipes: Recipe[]) {
//     this.recipes = recipes;
//     this.recipeChanged.next(this.recipes.slice());
//   }

//   getRecipes() {
//     return this.recipes.slice();
//   }

//   getRecipeById(index: number) {
//     return this.recipes.slice()[index];
//   }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     // this.shoppingListService.ingToBeAddedFrom(ingredients);
//     this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
//   }

//   addRecipe(addRecipe: Recipe) {
//     this.recipes.push(addRecipe);
//     this.recipeChanged.next(this.recipes.slice());
//   }

//   updateRecipe(index: number, newRecipe: Recipe) {
//     this.recipes[index] = newRecipe;
//     this.recipeChanged.next(this.recipes.slice());
//   }

//   deleteRecipe(index: number) {
//     this.recipes.splice(index, 1);
//     this.recipeChanged.next(this.recipes.slice());
//   }
// }
