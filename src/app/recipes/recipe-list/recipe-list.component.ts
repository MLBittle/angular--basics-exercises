import { Component, OnInit } from '@angular/core';
import { Recipe } from 'recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe'), "This is a simple test", 'https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg'
];

constructor() { }

ngOnInit() {

}
}
