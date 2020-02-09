import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  arrProductosSeleccionados: Producto[];

  constructor() {
    this.arrComida = [
      new Producto('Pizza', 12, 'https://image.flaticon.com/icons/svg/540/540194.svg'),
      new Producto('Burger', 16, 'https://image.flaticon.com/icons/svg/540/540212.svg'),
      new Producto('Pop', 7, 'https://image.flaticon.com/icons/svg/540/540206.svg'),
      new Producto('Brócoli', 5, 'https://image.flaticon.com/icons/svg/540/540250.svg'),
      new Producto('Pollo', 9, 'https://image.flaticon.com/icons/svg/540/540232.svg'),
      new Producto('Huevos', 8, 'https://image.flaticon.com/icons/svg/540/540209.svg'),
    ];

    this.arrBebida = [
      new Producto('Mojito', 13, 'https://image.flaticon.com/icons/svg/920/920724.svg'),
      new Producto('Gin', 11, 'https://image.flaticon.com/icons/svg/2445/2445461.svg'),
      new Producto('Daikiri', 9, 'https://image.flaticon.com/icons/svg/1285/1285231.svg'),
      new Producto('Ron', 13, 'https://image.flaticon.com/icons/svg/920/920724.svg'),
      new Producto('Vodka', 11, 'https://image.flaticon.com/icons/svg/2445/2445461.svg'),
      new Producto('Soda', 9, 'https://image.flaticon.com/icons/svg/1285/1285231.svg'),
    ];

    this.arrProductosSeleccionados = [];
  }

  manejarEmitirProducto($event) {
    const productoRepetido = this.arrProductosSeleccionados.find((producto) => {
      return (producto.nombre === $event.nombre);
    });
    if (!productoRepetido) {
      this.arrProductosSeleccionados.push($event);
    }
  }
}
