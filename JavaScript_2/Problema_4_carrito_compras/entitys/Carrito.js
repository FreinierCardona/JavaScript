export class Carrito {
    #items = [];

    agregar(item) {
        this.#items.push(item);
    }

    eliminar(nombre) {
        this.#items = this.#items.filter(i => i.nombre !== nombre);
    }

    get total() {
        return this.#items.reduce((acc, i) => acc + i.precio, 0);
    }

    obtenerItems() {
        return this.#items;
    }
}