export class Vehiculo {
    #placa;           // Identificación única del vehículo
    #velocidad = 0;   // Velocidad actual del vehículo (comienza en 0)

    constructor(placa) {
        this.#placa = placa;
    }

    // Getters para acceder a los valores privados
    get velocidad() { return this.#velocidad; }
    get placa() { return this.#placa; }

    acelerar(km) {
        // Solo incrementa la velocidad si el valor proporcionado es positivo
        if (km > 0) this.#velocidad += km;
    }

    frenar(km) {
        // Usa Math.max para asegurar que la velocidad no sea negativa
        this.#velocidad = Math.max(0, this.#velocidad - km);
    }
}