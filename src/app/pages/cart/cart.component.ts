import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartProducts: Product[];
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.reLoadCart();
  }

  public onUpdateCart(productId) {
    this.cartService.removeFromCart(productId);
    this.reLoadCart();
   }

   public changePage(diff) {
    this.cartService.changePage(diff);
    this.reLoadCart();
  }
  public selectPage(selectedPageNum) {
    this.cartService.selectPage(selectedPageNum);
    this.reLoadCart();
  }

  public reLoadCart(){
    this.cartService.loadCart();
    this.cartProducts = this.cartService.cartProductsForDisplay;
  }

  public get pagesNum() {
    return this.cartService.pagesNum;
  }
  public get currPage() {
    return this.cartService.currPage;
  }

}
