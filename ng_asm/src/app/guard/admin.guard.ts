// import { CanActivateFn } from '@angular/router';

// export const adminGuard: CanActivateFn = (route, state) => {
//   const roleL: any = localStorage.getItem('role');

//   if (!roleL) {
//     alert('Bạn cần đăng nhập tài khoản admin để truy cập trang quản trị!')
//     window.location.href = 'http://localhost:4200/';
//     return false
//   } else if (roleL != 1) {
//     alert('Bạn không có quyền truy cập trang này!')
//     window.location.href = 'http://localhost:4200/'
//     return false
//   } else {
//     return true;
//   }
// };


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const roleL: any = localStorage.getItem('role');

    if (roleL == null) {
      alert('Bạn cần đăng nhập tài khoản admin để truy cập trang quản trị!')
      this.router.navigate(['/'])
      return false
    } else if (roleL != 1) {
      alert('Bạn không có quyền truy cập trang này!')
      this.router.navigate(['/'])
      return false
    } else {
      return true;
    }
  }
}


