import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {Angular2TokenService} from "angular2-token";
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  public barIngredients : Array<Ingredient>;
  public allIngredients : Array<Ingredient>;

  constructor(public apiService:ApiService, public authService:AuthService) { }

  ngOnInit() {
    this.apiService.get("bar").subscribe((data: any) => {
      console.log(data);
      this.barIngredients = data;
    })
    this.apiService.get("ingredients").subscribe((data: any) => {
      console.log(data);
      this.allIngredients = data;
    })
  }

}
