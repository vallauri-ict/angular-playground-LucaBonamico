import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test", "Descrizione", "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2019/11/Come-pastorizzare-le-uova-7.jpg?w=580"),
    new Recipe("", "", ""),
    new Recipe("", "", ""),
    new Recipe("", "", ""),
    new Recipe("", "", ""),
    new Recipe("", "", ""),
    new Recipe("", "", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
