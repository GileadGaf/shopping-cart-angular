import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, tap } from 'rxjs/operators';
import { Product } from '../models/Product';
import { UtilitiesService } from './utilities.service';
const DEFAULT_PRODUCTS = [
  new Product(
    '61067bc3dc3665f674dcc5a6',
    'T-shirt',
    12,
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrz1YYi7cFVoGiZJFp1NTBEJJTih58A3gOlIeTps7KbuKMoWfv'
  ),
  new Product(
    '61067bc3708aaa831cbbb5df',
    'Jeans',
    44,
    'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemThumb/145262.jpg'
  ),
  new Product(
    '61067bc376c75e7b1d8bb731',
    'Coat',
    33,
    'https://www.trekomania.co.il/wp-content/uploads/2020/10/thomasblack-510x510.jpg'
  ),
  new Product(
    '61067bc3a17487ef62237b7b',
    'Sweater',
    21,
    'https://www.fjallraven.com/49c0ef/globalassets/catalogs/fjallraven/f8/f899/f89941/f667/ovik_knit_sweater_w_89941-667_a_main_fjr.jpg?width=680&height=680&mode=BoxPad&bgcolor=fff&quality=80'
  ),
  new Product(
    '61067bc3229c40251f4b3ed3',
    'Hat',
    6,
    'https://cdn.shopify.com/s/files/1/0073/9580/3195/products/The-Mirage-Coco-1-isolate_800x.jpg?v=1637031008'
  ),
  new Product(
    '61067bc35f81c1d0c782695a',
    'Fur Coat',
    77,
    'https://www.emanuel.co.il/pub/media/catalog/product/cache/d2a7fb6434ba0f7af8142f78e03373ac/f/2/F21PK0301-1633514249708856.jpg'
  ),
  new Product(
    '61067bc3de2170985d2c0fd2',
    'Golden Necklace',
    100,
    'https://is4.revolveassets.com/images/p4/n/z/LOEF-WL8_V1.jpg'
  ),
  new Product(
    '61067bc311498658527d4831',
    'Pants',
    25,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-xhPZshREUYd5JIWyN86m5NBBbDP-QkcSQ&usqp=CAU'
  ),
  new Product(
    '61067bc3552bf4db08150fd7',
    'Three Shirts Bundle',
    19,
    'https://cdn.shopify.com/s/files/1/0024/2525/8030/products/carteintlstamppack_800x800_crop_center.jpg?v=1600923363'
  ),
  new Product(
    '61067bc36b2015674b032ba9',
    'Cap',
    19,
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXBXXrlP4gQZp-LJSSjsI20tLPQ_TEv2DXuRldonI1sn_Jfh75cNuavVSJTxQu4bd3-HBUawPitQ&usqp=CAc'
  ),
  new Product(
    '6067bc3d942e869de655aad',
    'Shoes',
    33,
    'https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/-473Wx593H-460342492-blue-MODEL.jpg'
  ),
  new Product(
    '61067bc37d71ea3c430dac5d',
    'Dress',
    352,
    'https://cdn1.bambinifashion.com/img/p/6/0/0/9/4/7/600947--product-gallery.jpg'
  ),
  new Product(
    '61067bc3e72fb19564f5d8b1',
    'Belt Buckle',
    2,
    'https://www.paracord.eu/media/fit?width=200&height=200&type=webp&file=catalog/product/image/107136f15/metal-belt-buckle-20mm.jpg'
  ),
  new Product(
    '61067bc32cb9a230cd41b2e2',
    'Belt',
    5,
    'https://cashcow-cdn.azureedge.net/images/9fcbeafb-a3fa-4154-b957-01ed8bac6354.jpg'
  ),
  new Product(
    '61067bc36c1b8d934b2390a6',
    'Designer Shirt',
    32,
    'https://cdn1.bambinifashion.com/img/p/5/8/6/3/2/4/586324--product-gallery.jpg'
  ),
  new Product(
    '61067bc343fb5e8a9a581d15',
    'Earings',
    5,
    'https://image.made-in-china.com/202f0j00vMsEBbJCQFUe/925-Silver-Water-Drop-Earings-Fashion-Long-Earrings-for-Women.webp'
  ),
];

const PRODUCTS_PER_PAGE_COUNT = 6;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products$ = new BehaviorSubject<Product[]>([]);
  public products$ = this._products$.asObservable();
  public productPageIdx = 0;
  public pagesNum=0;
  public currPage = 1;

  constructor(private utilitiesService: UtilitiesService) {}

  public loadProducts() {
    let products = [...DEFAULT_PRODUCTS];
    this.pagesNum = Math.ceil(products.length / PRODUCTS_PER_PAGE_COUNT);
    
    if (this.productPageIdx >= products.length) {
      this.productPageIdx = 0;
    }
    else if (this.productPageIdx < 0) {
      this.productPageIdx += PRODUCTS_PER_PAGE_COUNT * this.pagesNum;
    }
    products = products.slice(this.productPageIdx, this.productPageIdx + PRODUCTS_PER_PAGE_COUNT);
    this.currPage = (this.productPageIdx / PRODUCTS_PER_PAGE_COUNT) + 1;
    this._products$.next(products);
  }


  public changePage(diff) {
    this.productPageIdx += PRODUCTS_PER_PAGE_COUNT * diff;
  }
  
  public selectPage(selectedPageNum) {
    this.productPageIdx = (selectedPageNum-1) * PRODUCTS_PER_PAGE_COUNT;
  }
  public  getProductById(productId) {
    let productsDb;
    const subscription = this._products$.subscribe(
      (products) => (productsDb = [...products])
    );
    subscription.unsubscribe();
   return productsDb.find(
      (product) => product._id === productId
    );
  }
}


