import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogicaService } from '../logica.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styles: `
  
  .carritoNoVacio {background-color:rgb(240, 145, 145);}`
})
export class NavBarComponent {

  constructor(private cart:LogicaService) { }

  isCartEmpty() {return this.cart.isCartEmpty();} 
}
