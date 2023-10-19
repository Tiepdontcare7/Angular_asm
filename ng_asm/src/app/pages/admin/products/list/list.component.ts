import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products: any = [];
  searchText: string = '';
  totalPages: any = 0;

  constructor(private prd: ProductsService) { }

  async ngOnInit() {
    this.loadProducts();
    this.totalPages = (await lastValueFrom(this.prd.getAll(8, 1))).data.totalPages;
  }

  async loadProducts() {
    this.products = (await lastValueFrom(this.prd.getAll(8, 1))).data.docs;
  }

  async handleDelete(id: any) {
    try {
      if (!window.confirm('Are you fucking sure?')) return;
      await lastValueFrom(this.prd.deleteP(id));
      alert('Delete product successfully');
      this.loadProducts();
    } catch (error: any) {
      alert('Delete product failed');
      console.log(error.message);
    }
  }

  async pa(limit: any, page: any) {
    this.products = (await lastValueFrom(this.prd.getAll(limit, page))).data.docs
  }
}
