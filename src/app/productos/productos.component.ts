import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() titulo: string;

  @Output() emitirProducto: EventEmitter<Producto>;

  constructor() {
    this.emitirProducto = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick(producto) {
    producto.cantidad++;
    this.emitirProducto.emit(producto);
  }

}
