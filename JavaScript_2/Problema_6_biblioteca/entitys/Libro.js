export class Libro {
    #titulo;              // Título del libro
    #autor;               // Autor del libro
    #disponible = true;   // Estado de disponibilidad (comienza como disponible)

    constructor(titulo, autor) {
        this.#titulo = titulo;
        this.#autor = autor;
    }

    // Getters para acceder a los valores privados
    get titulo() { return this.#titulo; }
    
    get estado() { return this.#disponible ? "Disponible" : "Prestado"; }
    
    get esPrestable() { return this.#disponible; }

    prestar() {
        // Si el libro no está disponible, no se puede prestar
        if (!this.#disponible) return false;
        // Cambia el estado a no disponible (prestado)
        this.#disponible = false;
        return true;
    }

    devolver() {
        this.#disponible = true;
    }
}