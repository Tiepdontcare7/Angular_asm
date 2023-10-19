import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
@Component({
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.scss']
})
export class EditCateComponent implements OnInit {
  category: any = {}

  categoryForm: any = this.form.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    slug: ['', [Validators.required, Validators.maxLength(5)]]
  })

  constructor(private router: ActivatedRoute, private cate: CategoriesService, private next: Router, private form: FormBuilder) {
  }

  async ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');

    this.category = (await lastValueFrom(this.cate.getById(id))).data
    this.categoryForm.patchValue(this.category)
  }


  async handleEdit() {
    try {
      const categories = (await lastValueFrom(this.cate.getAll())).data
      const nameFind = categories.filter((i: Icategory) => i.name == this.categoryForm.value.name)
      if (nameFind.length > 1) {
        alert('Danh mục đã tồn tại trong db!');
        return
      }

      await lastValueFrom(this.cate.updateC(this.category._id, this.categoryForm.value))
      alert('Update category successfully')
      this.next.navigate(['admin/category/list'])
    } catch (error: any) {
      alert(error?.error?.message)
      console.log(error)
    }

  }
}
