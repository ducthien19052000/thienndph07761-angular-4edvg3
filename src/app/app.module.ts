import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';

import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, CategoryComponent, ProductManagerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
