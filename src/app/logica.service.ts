import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  private carrito:any[] = []
  // private cartLS:any[] = []

  constructor() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]')

   }

  addToCart(dato:any) {
    if (!this.carrito.find(art => art.id == dato.id)) { 
      this.carrito.push({
        ...dato,
        cantidad: 1
      });
    } else {
      this.carrito.find(art => art.id === dato.id).cantidad++;
    }
    console.table(this.carrito);
    this.saveLS();
  }

  addUnit(datos:any){th}
  
  getArticulosCarrito() {return this.carrito;}

  isCartEmpty() {return this.carrito.length == 0;}

  removeArticle(id:number) {
    let position = this.carrito.findIndex(art => art.id == id);
    this.carrito.splice(position, 1);
    this.saveLS();
  }

  saveLS() {localStorage.setItem('carrito', JSON.stringify(this.carrito))}

}
