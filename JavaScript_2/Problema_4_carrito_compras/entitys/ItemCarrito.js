export class ItemCarrito {
    #nombre;  // Nombre del artículo
    #precio;  // Precio unitario del artículo

    constructor(nombre, precio) {
        this.#nombre = nombre;
        // Si el precio es positivo se usa el proporcionado, si no, se establece a 0
        this.#precio = precio > 0 ? precio : 0;
    }
    
    // Getters para acceder a los valores privados
    get nombre() { return this.#nombre; }
    get precio() { return this.#precio; }
}