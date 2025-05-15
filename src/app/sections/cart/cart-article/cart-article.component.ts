import { Component, Input } from '@angular/core';
import { LogicaService } from '../../../logica.service';

@Component({
  selector: 'app-cart-article',
  imports: [],
  templateUrl: './cart-article.component.html',
  styles: `
  
  img.img-thumbnail 
  {
    width:100px;
}

input.form-control 
  {
    display: inline;
    margin: 2px;
    width: 20%;
    }`
})
export class CartArticleComponent {
 @Input() datos: any

 constructor(private cart:LogicaService) { }

addUnit(datos:any)
{this.cart.addUnit(this.datos)}

decreaseUnit()
{
  this.datos
}

 removeArtFromCart(id: number) {
  this.cart.removeArticle(id);}

}
