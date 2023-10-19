import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private prd: ProductsService,
    private cart: CartService
  ) { }

  ngOnInit() {
    // window.scrollTo(0, 0);
    this.getProductDetail()
  }

  getProductDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prd.getById(id)
        .subscribe({
          next: (data) => { this.product = data.data }
        });
    }
  }

  async addToCart(data: IProduct) {
    const { _id, name, price, img } = data
    const userId = localStorage.getItem('userId')

    const c = await lastValueFrom(this.cart.addToCard({ userId: userId, productId: _id, name: name, price: price, img: img }))
    alert(c.message)
  }

}
