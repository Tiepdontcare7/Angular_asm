import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: any, searchText: string): any {
    return products.filter((i: IProduct) => i.name.toLowerCase().includes(searchText.toLowerCase()))
    && products.filter((i: IProduct) => i.desc.toLowerCase().includes(searchText.toLowerCase()));
  }

}
