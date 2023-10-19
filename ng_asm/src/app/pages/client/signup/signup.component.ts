import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private user: UsersService, private form: FormBuilder, private next: Router) {
  }

  userForm: any = this.form.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, { validators: this.checkPassValid })

  checkPassValid(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) return null;
    return { notSame: true }
  }

  async handleSignup() {
    if (this.userForm.inValid) return
    try {
      await lastValueFrom(this.user.signUp(this.userForm.value))
      alert('Đăng ký thành công!')
      this.next.navigate(['/'])

    } catch (error: any) {
      alert(error.error.messages)

    }
  }

}
