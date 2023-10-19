import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/client/home/home.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { NotfoundComponent } from './pages/client/404/notfound.component';
import { BannerComponent } from './components/banner/banner.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { AddComponent } from './pages/admin/products/add/add.component';
import { EditComponent } from './pages/admin/products/edit/edit.component';
import { SlideDescPipe } from './pages/admin/products/list/slide-desc.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListCateComponent } from './pages/admin/categories/list-cate/list-cate.component';
import { AddCateComponent } from './pages/admin/categories/add-cate/add-cate.component';
import { EditCateComponent } from './pages/admin/categories/edit-cate/edit-cate.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SigninComponent } from './pages/client/singin/singin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { ProductsInterceptor } from './interceptors/products.interceptor';
import { CardComponent } from './pages/client/card/card.component';
import { SortPricePipe } from './pages/client/home/sort-price.pipe';
import { FilterProductPipe } from './pages/admin/products/list/filter-product.pipe';
import { FilterCategoryPipe } from './pages/admin/categories/list-cate/filter-category.pipe';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    NotfoundComponent,
    BannerComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SlideDescPipe,
    SidebarComponent,
    ListCateComponent,
    AddCateComponent,
    EditCateComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    SignupComponent,
    SigninComponent,
    FormLayoutComponent,
    CardComponent,
    SortPricePipe,
    FilterProductPipe,
    FilterCategoryPipe,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProductsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
