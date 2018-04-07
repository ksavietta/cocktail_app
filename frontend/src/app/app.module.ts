import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/add',
    component: ProductAddComponent
  },
  {
    path: 'products/add/:id',
    component: ProductAddComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    RecipeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
