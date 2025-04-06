import { Component } from '@angular/core';

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

}
