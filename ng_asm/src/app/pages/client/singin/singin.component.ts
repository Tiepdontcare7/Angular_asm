import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SigninComponent {
  constructor(private user: UsersService, private form: FormBuilder, private next: Router) {
  }

  userForm: any = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  async handleSignin() {
    if (this.userForm.inValid) return
    try {
      const u = await lastValueFrom(this.user.signIn(this.userForm.value))
      alert('Đăng nhập thành công!')


      localStorage.setItem('username', u.findUser.username)
      localStorage.setItem('role', u.findUser.role)
      localStorage.setItem('token', u.token)
      localStorage.setItem('userId', u.findUser._id)

      this.next.navigate(['/'])
    } catch (error: any) {
      alert(error.error.messages)

    }
  }
}
