import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

 transform(value: number, numDecimals: number = 0): string {
    return value.toFixed(numDecimals) + " €";
  }

}
