import { Component, Input } from '@angular/core';
import { ConexionAPIService } from '../../../conexion-api.service';
import { LogicaService } from '../../../logica.service';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styles: ``
})
export class ArticleCardComponent {
  @Input() datos:any

  constructor(private cart:LogicaService) { }

  addToCart() {
    {this.cart.addToCart(this.datos)}

  // getArticles(){return this.api.getArticulos();}

}}
