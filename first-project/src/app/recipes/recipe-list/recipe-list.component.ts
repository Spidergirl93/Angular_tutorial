import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'The best food ever',
      'https://ewscripps.brightspotcdn.com/dims4/default/7e89202/2147483647/strip/true/crop/1000x563+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fcc%2F4d%2Ff4e966f448bbb73d4ffbb1d396e1%2Fwptv-pizza-hut-pizza.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
