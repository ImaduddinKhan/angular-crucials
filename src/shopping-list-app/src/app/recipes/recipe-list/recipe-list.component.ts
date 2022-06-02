import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A test Recipe',
            'test recipe description',
            'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')
    ];
    
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    constructor() { }

    ngOnInit(): void {
    }

    selectedRecipe(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }
}
