import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anyWord'
})
export class AnyWordPipe implements PipeTransform {

  transform(value: string | number): string {
    return "string from AnyWordPipe.transform";
  }

}
