import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  product: any = {};
  category: any = [];

  constructor(private router: ActivatedRoute, private prd: ProductsService, private cate: CategoriesService, private next: Router, private form: FormBuilder) {
  }

  productForm: any = this.form.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', Validators.required],
    desc: ['', Validators.required],
    img: ['', Validators.required],
    categoryId: ['', Validators.required]
  })

  async ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id')

    if (id)
      this.product = (await lastValueFrom(this.prd.getById(id))).data;

    this.productForm.patchValue({
      ...this.product,
      categoryId: this.product.categoryId?._id
    })

    this.category = (await lastValueFrom(this.cate.getAll())).data
  }

  async handleEdit() {
    if (this.productForm.invalid) return

    try {
      const products = (await lastValueFrom(this.prd.getAll(10,1))).data.docs
      const nameFind = products.filter((i: IProduct) => i.name == this.productForm.value.name)
      if (nameFind.length > 1) {
        alert('Sản phẩm đã tồn tại trong db!');
        return
      }

      await lastValueFrom(this.prd.updateP(this.product._id, this.productForm.value))
      alert('Update product successfully')
      this.next.navigate(['admin/product/list'])
    } catch (error: any) {
      alert(error.error.message)
    }
  }


}
