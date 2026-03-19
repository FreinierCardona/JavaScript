export class Estudiante {
    #nombre;  // Nombre del estudiante
    #nota;    // Calificación del estudiante entre 0 y 5

    constructor(nombre, nota) {
        // Validación: la nota debe estar en el rango de 0 a 5
        if (nota < 0 || nota > 5) throw new Error("La nota debe estar entre 0 y 5.");
        this.#nombre = nombre;
        this.#nota = nota;
    }

    // Getters para acceder a los valores privados
    get nombre() { return this.#nombre; }
    get nota() { return this.#nota; }
    
    get aprobado() { return this.#nota >= 3.0; }
}