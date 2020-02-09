import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() arrProductosSeleccionadosPedido: Producto[];

  iconoBorrar = faTrash;

  constructor() { }

  ngOnInit() {
  }

  calcularTotal() {
    let total = 0;
    for (const producto of this.arrProductosSeleccionadosPedido) {
      total += (producto.precio * producto.cantidad);
    }
    return total;
  }

  manejarClickBorrado(producto) {
    producto.cantidad--;
    const posicion = this.arrProductosSeleccionadosPedido.findIndex((producto) => {
      return (producto.cantidad === 0);
    });
    if (posicion !== -1) {
      this.arrProductosSeleccionadosPedido.splice(posicion, 1);
    }
  }

}
