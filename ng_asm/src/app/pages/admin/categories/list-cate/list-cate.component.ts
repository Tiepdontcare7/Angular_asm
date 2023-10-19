import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.scss']
})
export class ListCateComponent implements OnInit {
  categorys: any = [];
  searchText: string = '';

  constructor(private cate: CategoriesService) { }

  ngOnInit() {
    this.loadCategory()
  }

  async loadCategory() {
    this.categorys = (await lastValueFrom(this.cate.getAll())).data
  }

  async handleDelete(id: any) {
    try {
      if (!window.confirm('Are you fucking sure?')) return

      await lastValueFrom(this.cate.deleteC(id))
      alert('Delete category successfully');
      this.loadCategory();
    } catch (error: any) {
      alert('Delete category failed'),
        console.log(error.message)
    }

  }
  // async pa(limit: any, page: any) {
  //   this.products = (await lastValueFrom(this.prd.getAll(limit, page))).data.docs
  // }
}
