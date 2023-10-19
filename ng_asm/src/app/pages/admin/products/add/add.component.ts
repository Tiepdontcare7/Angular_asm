import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  categorys: any = [];

  constructor(private prd: ProductsService,
    private cate: CategoriesService,
    private router: Router,
    private form: FormBuilder
  ) {
  }

  async ngOnInit() {
    this.categorys = (await lastValueFrom(this.cate.getAll())).data
  }

  productForm: any = this.form.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, Validators.required],
    desc: ['', Validators.required],
    img: ['', Validators.required],
    categoryId: ['', Validators.required]
  })

  async handleAdd() {
    if (this.productForm.invalid) return;

    try {
      const products = (await lastValueFrom(this.prd.getAll(10, 1))).data.docs
      const nameFind = products.find((i: IProduct) => i.name == this.productForm.value.name)
      if (nameFind) {
        alert('Sản phẩm đã tồn tại trong db!');
        return
      }

      await lastValueFrom(this.prd.createP(this.productForm.value))
      alert('Add product successfully')
      this.router.navigate(['admin/product/list'])
    } catch (error: any) {
      alert(error.error.message)
    }

  }

}
