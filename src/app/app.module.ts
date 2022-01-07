import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductListComponent } from './cmps/product-list/product-list.component';
import { ProductPreviewComponent } from './cmps/product-preview/product-preview.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductFilterComponent } from './cmps/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomepageComponent,
    ProductListComponent,
    ProductPreviewComponent,
    CartComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
