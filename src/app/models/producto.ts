export class Producto {

    nombre: string;
    precio: number;
    foto: string;
    cantidad: number;

    constructor(pNombre: string, pPrecio: number, pFoto: string) {
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.foto = pFoto;
        this.cantidad = 0;
    }
}