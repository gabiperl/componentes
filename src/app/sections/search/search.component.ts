import { Component } from '@angular/core';
import { ConexionAPIService } from '../../conexion-api.service';
import { ArticleCardComponent } from '../cart/article-card/article-card.component';
import { FilterByPatternPipe } from '../../filter-by-pattern.pipe';
import { FilterByCatPipe } from '../../filter-by-cat.pipe';
import { FilterByFabPipe } from '../../filter-by-fab.pipe';

@Component({
  selector: 'app-search',
  imports: [ArticleCardComponent, FilterByPatternPipe, FilterByCatPipe, FilterByFabPipe],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  
  private fabricantes:any = []
  private pattern:string = ""
  private catID:string = '0'
  private fabID:string = '0'


  constructor(private api:ConexionAPIService) { 
    this.api.getFabricantes().subscribe((json:any) => 
      {this.fabricantes = json;})
  }


  getArticulos() {return this.api.getArticulos();}
  getCategorias() {return this.api.getCategorias()}
  getFabricantes() {return this.fabricantes;}

  setFabricante(fab:string) {this.fabID = fab;}
  getFabricante() {return this.fabID;}

  setCategory(cat:string) {this.catID = cat;}
  getCategory() {return this.catID;}

  setPattern(pattern:string) {this.pattern = pattern;}
  getPattern() {return this.pattern;}

  

}
