import { ContentChild, EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products?: Product[];
  @Input() isCartDisplayed: boolean;
  @Output('onUpdateCart') updateCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  public onUpdateCart(productId) {
    this.updateCart.emit(productId);
  }
  public get updateCartBtnTitle() {
    let title = 'ADD TO CART';
    if (this.isCartDisplayed) title = 'REMOVE FROM CART';
    return title;
  }
}
