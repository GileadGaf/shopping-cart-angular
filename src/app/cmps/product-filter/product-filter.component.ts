import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input() pagesNum: number;
  @Input() currPage: number;
  @Output('onChangePage')changPage=new EventEmitter();
  @Output('onSelectPage') selectPage=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectPage(selectedPageNum) {
    this.selectPage.emit(selectedPageNum);
  }

  public onChangePage(diff) {
    this.changPage.emit(diff);
  }

  public get productPages() {
    return [ ...Array(this.pagesNum).keys()].map( i => i+1);
  }


}
