import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.products$;
    this.productService.loadProducts();
  
  }

  public onUpdateCart(productId) {
    this.cartService.addToCart(productId);
    this.cartService.loadCart();
  }
  public changePage(diff) {
    this.productService.changePage(diff);
    this.productService.loadProducts();
  }
  public selectPage(selectedPageNum) {
    this.productService.selectPage(selectedPageNum);
    this.productService.loadProducts();
  }

  public get pagesNum() {
    return this.productService.pagesNum;
  }
  public get currPage() {
    return this.productService.currPage;
  }

}
