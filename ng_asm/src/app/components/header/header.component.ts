import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tokenL: string | null = '';
  usernameL: string | null = '';
  roleL: string | null = '';

  ngOnInit() {
    this.tokenL = localStorage.getItem('token')
    this.usernameL = localStorage.getItem('username')
    this.roleL = localStorage.getItem('role')
  }

  Logout() {
    localStorage.clear();
    window.location.reload();
  }
}
