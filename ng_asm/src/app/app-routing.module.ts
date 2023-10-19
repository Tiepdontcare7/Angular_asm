import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { NotfoundComponent } from './pages/client/404/notfound.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { AddComponent } from './pages/admin/products/add/add.component';
import { EditComponent } from './pages/admin/products/edit/edit.component';
import { ListCateComponent } from './pages/admin/categories/list-cate/list-cate.component';
import { AddCateComponent } from './pages/admin/categories/add-cate/add-cate.component';
import { EditCateComponent } from './pages/admin/categories/edit-cate/edit-cate.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SigninComponent } from './pages/client/singin/singin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { CardComponent } from './pages/client/card/card.component';
// import { adminGuard } from './guard/admin.guard';
import { AdminGuard } from './guard/admin.guard';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';

const routes: Routes = [
  {
    path: "user", component: FormLayoutComponent, children: [
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "card", component: CardComponent },
      { path: "checkout", component: CheckoutComponent },
    ]
  },
  {
    path: "", component: ClientLayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "detail/:id", component: DetailComponent }
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, canActivate: [AdminGuard], children: [
      { path: "", redirectTo: "product/list", pathMatch: "full" },
      // Product
      { path: "product/list", component: ListComponent },
      { path: "product/add", component: AddComponent },
      { path: "product/edit/:id", component: EditComponent },
      // Category
      { path: "category/list", component: ListCateComponent },
      { path: "category/add", component: AddCateComponent },
      { path: "category/edit/:id", component: EditCateComponent }
    ]
  },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
