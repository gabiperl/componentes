import { Component, Input } from '@angular/core';
import { ConexionAPIService } from '../../../conexion-api.service';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styles: ``
})
export class ArticleCardComponent {
  @Input() datos:any

  constructor(private api:ConexionAPIService) { }

  getArticles(){return this.api.getArticulos();}

}
