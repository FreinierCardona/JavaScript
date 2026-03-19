import { Vehiculo } from "./entitys/Vehiculo.js";

// Variable para guardar el vehículo actual
let vehiculo = null;

// Elementos del DOM
const inputPlaca = document.getElementById("vehiculoPlaca");
const btnRegistrar = document.getElementById("btnRegistrarVehiculo");
const panelControl = document.getElementById("panelControlVehiculo");

const txtVelocidad = document.getElementById("txtVelocidad");
const inputKm = document.getElementById("inputKm");
const btnAcelerar = document.getElementById("btnAcelerar");
const btnFrenar = document.getElementById("btnFrenar");

// Registrar vehículo
btnRegistrar.addEventListener("click", () => {
    const placa = inputPlaca.value.trim().toUpperCase();

    if (!placa) {
        alert("Ingresa una placa válida");
        return;
    }

    vehiculo = new Vehiculo(placa);

    panelControl.classList.remove("d-none"); // Mostrar panel
    actualizarVista();
});

// Acelerar
btnAcelerar.addEventListener("click", () => {
    const km = parseFloat(inputKm.value);

    if (!vehiculo || isNaN(km) || km <= 0) {
        alert("Ingresa un valor válido");
        return;
    }

    vehiculo.acelerar(km);
    actualizarVista();
});

// Frenar
btnFrenar.addEventListener("click", () => {
    const km = parseFloat(inputKm.value);

    if (!vehiculo || isNaN(km) || km <= 0) {
        alert("Ingresa un valor válido");
        return;
    }

    vehiculo.frenar(km);
    actualizarVista();
});

// Actualizar interfaz
function actualizarVista() {
    txtVelocidad.textContent = vehiculo.velocidad;
    inputKm.value = "";
}