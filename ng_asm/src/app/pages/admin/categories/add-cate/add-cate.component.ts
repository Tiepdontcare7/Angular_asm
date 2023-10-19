import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
@Component({
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.scss'],
})
export class AddCateComponent {
  constructor(
    private cate: CategoriesService,
    private next: Router,
    private form: FormBuilder
  ) { }

  categoryForm: any = this.form.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    slug: ['', [Validators.required, Validators.minLength(5)]],
  });

  async handleAdd() {
    if (this.categoryForm.invalid) return;
    try {
      const categories = (await lastValueFrom(this.cate.getAll())).data
      const nameFind = categories.find((i: Icategory) => i.name == this.categoryForm.value.name)
      if (nameFind) {
        alert('Danh mục đã tồn tại trong db!');
        return
      }
      
      await lastValueFrom(this.cate.createC(this.categoryForm.value));
      alert('Add category successfully'),
      this.next.navigate(['admin/category/list']);
    } catch (error: any) {
      console.log(error)
      alert(error?.error?.message);
    }
  }
}
