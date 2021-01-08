import { Recipe } from './recipe.model';
import { EventEmitter, Output, Directive, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is First Simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('South Indian', 'This is a South indian Recipe', 'https://images.herzindagi.info/image/2020/Apr/south-indian-food-recipes-m.jpg', []),
        new Recipe('A Test Recipe', 'This is Simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', []),
        new Recipe('South Indian', 'This is a South indian Recipe', 'https://images.herzindagi.info/image/2020/Apr/south-indian-food-recipes-m.jpg', []),
        new Recipe('A Test Recipe', 'This is Simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', []),
        new Recipe('South Indian', 'This is a South indian Recipe', 'https://images.herzindagi.info/image/2020/Apr/south-indian-food-recipes-m.jpg', []),
        new Recipe('A Test Recipe', 'This is Simply a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg', []),
        new Recipe('South Indian', 'This is a South indian Recipe', 'https://images.herzindagi.info/image/2020/Apr/south-indian-food-recipes-m.jpg', []),
    ];
    constructor(private slService: ShoppinglistService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingrediens: Ingredient[]) {
        this.slService.addIngredients(ingrediens);
    }

}