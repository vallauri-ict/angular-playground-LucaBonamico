import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Simple Description Test", "https://i.imgur.com/fMdnwbd.jpg%22"),
    new Recipe("", "", ""),
    new Recipe("", "", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
