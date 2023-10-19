import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any = [];
  priceFrom: any = ''
  priceTo: any = ''
  selectedSort: any = 'Sort By';

  constructor(private prd: ProductsService) {
    this.prd.getAll(8, 1).subscribe({
      next: (data) => { this.products = data.data.docs },
      error: (err) => console.log(err)
    })
  }

  resetPrice() {
    this.priceFrom = ''
    this.priceTo = ''
  }

  async pa(limit: any, page: any) {
    this.products = (await lastValueFrom(this.prd.getAll(limit, page))).data.docs
  }
}
