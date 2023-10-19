import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(products: any, searchText: string): any {
    return products.filter((i: Icategory) => i.name.toLowerCase().includes(searchText.toLowerCase()))
      && products.filter((i: Icategory) => i.slug.toLowerCase().includes(searchText.toLowerCase()))
      ;
  }

}
