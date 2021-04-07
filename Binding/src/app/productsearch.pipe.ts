import { Pipe, PipeTransform } from '@angular/core';
import { IProd } from './product/iProd';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: IProd[], args: string): IProd[] {
    if(!args){
      return value;
    }
    return value.filter(
      item => item.Title.toLowerCase().indexOf(args.toLowerCase()) >-1
    )
  }

}
