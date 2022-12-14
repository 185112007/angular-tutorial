import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../model/product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {

    if (!value || !filterText){
      return value;
    }

    return value.filter(p =>
        p.name?.toLocaleLowerCase().indexOf(filterText)!==-1);
  }

}
