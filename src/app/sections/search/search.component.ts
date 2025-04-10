import { Component } from '@angular/core';
import { ConexionAPIService } from '../../conexion-api.service';
import { ArticleCardComponent } from '../cart/article-card/article-card.component';

@Component({
  selector: 'app-search',
  imports: [ArticleCardComponent],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  constructor(private api:ConexionAPIService) { }


  getCategorias() {return this.api.getCategorias();}
  getFabricantes() {return this.api.getFabricantes();}
  getArticles() {return this.api.getArticulos();}

}
