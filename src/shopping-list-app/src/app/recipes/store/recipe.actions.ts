import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const EDIT_RECIPE = '[Recipes] Edit Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class EditRecipe implements Action {
  readonly type = EDIT_RECIPE;
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipesActions = SetRecipes | EditRecipe | FetchRecipes;
