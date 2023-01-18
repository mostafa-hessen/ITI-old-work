import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==0){
      return 'Out Of Stock'
    }

    else{
      return 'In Stock'

    }
    return null;
  }

}
