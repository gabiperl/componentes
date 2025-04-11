import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCat'
})
export class FilterByCatPipe implements PipeTransform {

  transform(arrayEntrada:any[], cat:string): any[] {
    if (cat == '0') 
      {return arrayEntrada}
    else 
    {return arrayEntrada.filter(articulo => articulo.cat == cat);}
  }
}
