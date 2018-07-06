import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.sass']
})
export class IngredientSearchComponent implements OnInit {
  public imageSrc1: string = '../../assets/images/home/image2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
