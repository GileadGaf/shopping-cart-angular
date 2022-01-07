import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.loadCart();
  }

  public get cartProductsCount() {
    return this.cartService.cartProductsCount;
  }

  public get cartProductsTotalPrice() {
    return this.cartService.cartTotalPrice;
  }


}
