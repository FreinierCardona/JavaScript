export class Producto {
    #nombre;    // Nombre del producto
    #precio;    // Precio unitario del producto
    #cantidad;  // Cantidad disponible en inventario

    constructor(nombre, precio, cantidad) {
        // Validación: ni precio ni cantidad pueden ser negativos
        if (precio < 0 || cantidad < 0) throw new Error("Valores no pueden ser negativos.");
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
    }

    // Getters para acceder a los valores privados
    get nombre() { return this.#nombre; }
    get precio() { return this.#precio; }
    get cantidad() { return this.#cantidad; }
    
    get valorStock() { return this.#precio * this.#cantidad; }
}