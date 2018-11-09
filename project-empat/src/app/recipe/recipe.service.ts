import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate against a black background',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Tahu Telor',
    'Tahu Telor is a dish of cooked tahu with egg that has been stir-fried in a wok or a frying pan and this usually eat with lontong or rice',
    '../src/app/img/tt.jpg',[
      new Ingredient('rice',1),
      new Ingredient('tahu',3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes() {
      return this.recipes.slice();
    }

    addIngredientsShoppingList(ingredients:Ingredient[]) {
      this.slsService.addIngredients(ingredients);
    }

    constructor(private slsService: ShoppingListService) { }

  }
