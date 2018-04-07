import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot([
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
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
