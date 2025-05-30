import { Component } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { LogicaService } from '../../logica.service';
import { CartArticleComponent } from "./cart-article/cart-article.component";
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '../../decimal.pipe';

@Component({
  selector: 'app-cart',
  imports: [ArticleCardComponent, CartArticleComponent, CommonModule, DecimalPipe],
  templateUrl: './cart.component.html',
  styles: `
  
  div.cartPrice{
    height: 100px;
    font-size: 1.5em;
    font-weight: bold;
}`
})
export class CartComponent {

  constructor(private cart:LogicaService) {}

  clearCart()
  {this.cart.clearCart();}

  getArticulosCarrito()
  {return this.cart.getArticulosCarrito();} // Devuelve el carrito de la compra

  getTotalCarrito()
  {return this.cart.getTotalCarrito();}


}
