import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPattern'
})
export class FilterByPatternPipe implements PipeTransform {

  transform(arrayEntrada: any[], patron: string): any[] {
    return arrayEntrada.filter(articulo =>
     articulo.nombre.toLowerCase().includes(patron.toLowerCase()));
  }

}
