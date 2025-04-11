import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFab'
})
export class FilterByFabPipe implements PipeTransform {

  transform(arrayEntrada: any[], fab:string): any[] {
    if (fab == '0')
    {return arrayEntrada}
    else 
    {return arrayEntrada.filter(art => art.fab == fab);}
  }

}
