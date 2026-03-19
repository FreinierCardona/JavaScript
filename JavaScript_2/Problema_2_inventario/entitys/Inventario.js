import { Producto } from "./Producto.js";

export class Inventario {
    #productos = [];  // Array que almacena todos los productos del inventario

    agregar(producto) {
        // Validación: verifica que el objeto sea una instancia de Producto
        if (!(producto instanceof Producto)) throw new Error("Objeto no válido.");
        this.#productos.push(producto);
    }

    get totalInventario() {
        // Usa reduce para acumular el valor total: suma el valorStock de cada producto
        return this.#productos.reduce((acc, p) => acc + p.valorStock, 0);
    }

    get lista() { return [...this.#productos]; }
}