import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';

// ngx-bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AuthDialogContentComponent } from './auth-dialog-content/auth-dialog-content.component';

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
    path: 'recipes/:id',
    component: RecipeShowComponent
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
    RecipeShowComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    AuthDialogContentComponent,
  ],
  entryComponents: [AuthDialogContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ApiService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
