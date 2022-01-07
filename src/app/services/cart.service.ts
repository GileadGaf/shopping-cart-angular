import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from './product.service';
import { UtilitiesService } from './utilities.service';

const CART_KEY = 'cartDb';
const PRODUCTS_PER_PAGE_COUNT = 6;
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartProducts: Product[];
  public cartProductsForDisplay: Product[];
  public productPageIdx = 0;
  public pagesNum = 0;
  public currPage = 1;
  constructor(
    private utilitiesService: UtilitiesService,
    private productService: ProductService
  ) {}

  public loadCart() {
    if (!this._cartProducts) {
      this._cartProducts =
        this.utilitiesService.loadFromStorage(CART_KEY) || [];
    }
    let cartProducts = [...this._cartProducts];
    console.log(cartProducts.length);
    this.pagesNum = Math.ceil(
      this._cartProducts.length / PRODUCTS_PER_PAGE_COUNT
    );

    if (this.productPageIdx >= this._cartProducts.length) {
      this.productPageIdx = 0;
    } else if (this.productPageIdx < 0) {
      this.productPageIdx += PRODUCTS_PER_PAGE_COUNT * this.pagesNum;
    }
    this.currPage = this.productPageIdx / PRODUCTS_PER_PAGE_COUNT + 1;
    cartProducts = cartProducts.slice(
      this.productPageIdx,
      this.productPageIdx + PRODUCTS_PER_PAGE_COUNT
    );
    this.cartProductsForDisplay = [...cartProducts];
  }

  public changePage(diff) {
    this.productPageIdx += PRODUCTS_PER_PAGE_COUNT * diff;
  }

  public selectPage(selectedPageNum) {
    this.productPageIdx = (selectedPageNum - 1) * PRODUCTS_PER_PAGE_COUNT;
  }

  public addToCart(productId) {
    const selectedProduct = this.productService.getProductById(productId);
    console.log(this._cartProducts);
    this._cartProducts.push(selectedProduct);
    this.utilitiesService.saveToStorage(CART_KEY, this._cartProducts);
  }

  public removeFromCart(productId) {
    const productInCartIdx = this._cartProducts.findIndex(
      (product) => product._id === productId
    );
    if (productInCartIdx !== -1) {
      this._cartProducts.splice(productInCartIdx, 1);
      this.utilitiesService.saveToStorage(CART_KEY, this._cartProducts);
    }
  }

  public get cartProductsCount() {
    return this._cartProducts.length;
  }

  public get cartTotalPrice() {
    let totalPrice = this._cartProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );
    return totalPrice;
  }
}
