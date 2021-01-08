import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Output } from '@angular/core';

export class ShoppinglistService {
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 6),
        new Ingredient('Orrenge', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        //   for(let i of ingredients){
        //       this.addIngredient(i);
        //   }
        this.ingredients.push(...ingredients);
        this.ingredientChange.emit(this.ingredients.slice());
    }
    removeIngredients() {
        this.ingredients.pop();
    }
}