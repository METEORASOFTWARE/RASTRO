import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interface/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  VERSION_RASTRO = environment.versionRastro;
  
  PRODUCTOS!: Productos;
  LOADING_DATOS: boolean = false;

  constructor(
    private productoSrv: ProductosService
  ) { }

  ngOnInit() {
    this.LOADING_DATOS = true;
    this.productoSrv.get()
    .subscribe( (res: Productos) => {
      this.PRODUCTOS = res;
      this.LOADING_DATOS = false;
    })
  }

}
