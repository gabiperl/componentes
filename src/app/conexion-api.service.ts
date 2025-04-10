import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionAPIService {

  private urlCategorias:string =   "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/categorias"
  private urlFabricantes:string =  "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/fabricantes"
  private urlArticulos:string =    "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/articulos"
  private urlDataBase:string =     "https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/db"

  constructor(private http:HttpClient) {
    
  }


  getCategorias() {return this.http.get(this.urlCategorias).subscribe((data:any) => 
    {this.categorias = data;})}

  getFabricantes() {return this.http.get(this.urlFabricantes).subscribe((data:any) => 
    {this.fabricantes = data;})}

  
}
