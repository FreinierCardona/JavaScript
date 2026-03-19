import { CuentaBancaria } from "./entitys/CuentaBancaria.js";

// Variable global para almacenar la cuenta actual
let cuentaActual = null;

// Referencias al DOM
const clienteNombre = document.getElementById("clienteNombre");
const saldoInicial = document.getElementById("saldoInicial");
const btnCrearCuenta = document.getElementById("btnCrearCuenta");

const montoTransaccion = document.getElementById("montoTransaccion");
const btnIngresar = document.getElementById("btnIngresar");
const btnRetirar = document.getElementById("btnRetirar");

const mensajeCuenta = document.getElementById("mensajeCuenta");

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo = "info") {
    mensajeCuenta.className = `alert alert-${tipo}`;
    mensajeCuenta.textContent = texto;
    mensajeCuenta.classList.remove("d-none");
}

// Crear cuenta
btnCrearCuenta.addEventListener("click", () => {
    try {
        const nombre = clienteNombre.value.trim();
        const saldo = parseFloat(saldoInicial.value);

        if (!nombre) throw new Error("Ingrese el nombre del cliente.");
        cuentaActual = new CuentaBancaria(nombre, saldo || 0);
        mostrarMensaje(`Cuenta creada para ${cuentaActual.cliente} con saldo $${cuentaActual.saldo}`, "success");

    } catch (error) {
        mostrarMensaje(error.message, "danger");
    }
});

// Ingresar dinero
btnIngresar.addEventListener("click", () => {
    try {
        if (!cuentaActual) throw new Error("Primero debes crear una cuenta.");
        const monto = parseFloat(montoTransaccion.value);
        const resultado = cuentaActual.ingresar(monto);

        mostrarMensaje(resultado, "success");

    } catch (error) {
        mostrarMensaje(error.message, "danger");
    }
});

// Retirar dinero
btnRetirar.addEventListener("click", () => {
    try {
        if (!cuentaActual) throw new Error("Primero debes crear una cuenta.");
        const monto = parseFloat(montoTransaccion.value);
        const resultado = cuentaActual.retirar(monto);
        mostrarMensaje(resultado, "warning");

    } catch (error) {
        mostrarMensaje(error.message, "danger");
    }
});