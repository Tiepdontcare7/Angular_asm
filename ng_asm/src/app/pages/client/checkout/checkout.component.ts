import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { MailService } from 'src/app/services/mail.service';
import { PaypalService } from 'src/app/services/paypal.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private form: FormBuilder, private mail: MailService) { }

  orderForm = this.form.group({
    email: ['', [Validators.required]]
  })

  async orderSubmit() {
    if (this.orderForm.invalid) { alert('Kiểm tra lại form!'); return }
    
    console.log(this.orderForm.value.email)

    alert('Cảm ơn đã đặt hàng, kiểm tra email!')
    await lastValueFrom(this.mail.sendMail({ email: this.orderForm.value.email }))
  }
}
