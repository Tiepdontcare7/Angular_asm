import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerUrl = [
    {
      url: 'https://lamsachdoda.com/wp-content/uploads/chup-hinh-trong-rung.jpg',
    },
    {
      url: 'https://cdn.yeutre.vn/medias/place.vn/35/35628/rung-thong-da-lat-duong-khoi-nghia-bac-son.jpg',
    },
  ];
}
