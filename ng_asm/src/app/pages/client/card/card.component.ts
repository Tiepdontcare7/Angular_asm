import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { MailService } from 'src/app/services/mail.service';
import { PaypalService } from 'src/app/services/paypal.service';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(private cart: CartService, private pay: PaypalService) { }

  cartProduct: any = [];
  toltalPrice: number = 0;
  total: any = 0;
  quantity: any = 0;
  userId: any = localStorage.getItem('userId');

  async ngOnInit() {
    const carts = await lastValueFrom(this.cart.getAllCart())
    this.cartProduct = carts?.data[0]?.products
    this.toltalPrice = this.cartProduct.reduce((acc: number, item: any) =>acc + (item.price) * item.quantity, 0)
    this.total = this.cartProduct?.reduce((acc: any, item: any) => acc + (item.price) * item.quantity, 0) - this.toltalPrice * 0.1
  }


  async removeCartItem(productId: string, userId: string, name: string) {

    const c = await lastValueFrom(this.cart.removeCartItem({ productId, userId, name }))
    console.log(c)
    if (c.deleted) {
      this.cartProduct = c.updatedCart.products
    }
  }

  async redirectPay() {
    const res = await lastValueFrom(this.pay.paypal(this.cartProduct))
    console.log(res)

    if (res.href) window.location.href = res.href
    else alert('Chức năng thanh toán đang lỗi'); return
  }

}
