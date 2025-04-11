import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  private categorias:any = []
  private articulos:any = []

  private urlCategorias:string =   "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/categorias"
  private urlFabricantes:string =  "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/fabricantes"
  private urlArticulos:string =    "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/articulos"
  private urlDataBase:string =     "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/db"

  constructor(private http:HttpClient) {
    this.http.get(this.urlCategorias).subscribe((data:any) =>
    {this.categorias = data;})

    this.http.get(this.urlArticulos).subscribe((json:any) =>
    {this.articulos = json;})
  }

  getArticulos() {return this.articulos;}
  getCategorias() {return this.categorias;}
  getFabricantes() {return this.http.get(this.urlFabricantes);}

  
}
