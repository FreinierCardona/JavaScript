export class CuentaBancaria {
    // Atributos privados (#) - no se pueden acceder desde fuera de la clase
    #saldo;     // Almacena el dinero disponible en la cuenta
    #cliente;   // Nombre del titular de la cuenta

    constructor(cliente, saldoInicial = 0) {
        this.#cliente = cliente;
        // Si el saldo es negativo, se establece a 0. De lo contrario, usa el saldo inicial
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    // Getters - permiten leer el valor de los atributos privados
    get cliente() { return this.#cliente; }
    get saldo() { return this.#saldo; }

    ingresar(monto) {
        // Validaciones: el monto debe ser un número y debe ser positivo
        if (typeof monto !== 'number' || monto <= 0) {
            throw new Error("El monto a ingresar debe ser un número positivo.");
        }
        // Suma el monto al saldo actual
        this.#saldo += monto;
        return `Ingreso exitoso. Nuevo saldo: $${this.#saldo}`;
    }

    retirar(monto) {
        // Validación 1: el monto debe ser mayor a cero
        if (monto <= 0) throw new Error("El monto debe ser mayor a cero.");
        // Validación 2: debe haber suficientes fondos en la cuenta
        if (monto > this.#saldo) throw new Error("Fondos insuficientes.");
        
        // Resta el monto del saldo actual
        this.#saldo -= monto;
        return `Retiro exitoso. Saldo restante: $${this.#saldo}`;
    }
}