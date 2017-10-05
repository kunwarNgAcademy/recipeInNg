import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredient[];
  // =[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tommatoes',10)
  // ];
  constructor(private shoplistservice:ShoppingListService) {
    // this.shoplistservice.ingredientAdded.subscribe(
    //   (ingredient:Ingredient)=>{
    //     this.ingredients.push(ingredient);
    //   }
    // )
   }

  ngOnInit() {
    this.ingredients = this.shoplistservice.getIngredients();
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  onEditItems(index){
    this.shoplistservice.startedEditing.next(index);
  }
  

}
