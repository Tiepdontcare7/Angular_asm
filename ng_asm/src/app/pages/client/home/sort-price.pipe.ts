import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform {

  transform(products: IProduct[], selectedSort: any, priceForm: any, priceTo: any): any {
    console.log(priceForm, priceTo)
    if (priceForm && priceTo) {
      return products.filter(i => i.price >= priceForm && i.price <= priceTo)
    } else {
      if (selectedSort == 'desc') {
        return products.sort((a, b) => a.price - b.price);
      } else if (selectedSort == 'asc') {
        return products.sort((a, b) => b.price - a.price);
      } else {
        return products;
      }
    }
  }

}
