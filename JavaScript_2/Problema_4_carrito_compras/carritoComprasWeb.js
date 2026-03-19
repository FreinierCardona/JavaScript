import { Carrito } from "./entitys/Carrito.js";
import { ItemCarrito } from "./entitys/ItemCarrito.js";

// Instancia del carrito
const carrito = new Carrito();

// Elementos del DOM
const inputNombre = document.getElementById("itemNombre");
const inputPrecio = document.getElementById("itemPrecio");
const btnAgregar = document.getElementById("btnAgregarAlCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

// Evento para agregar producto
btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value);

    // Validación simple
    if (!nombre || isNaN(precio) || precio <= 0) {
        alert("Ingresa un producto y un precio válido");
        return;
    }

    const item = new ItemCarrito(nombre, precio);
    carrito.agregar(item);

    limpiarInputs();
    renderizarCarrito();
});

// Función para renderizar carrito
function renderizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.obtenerItems().forEach(item => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td class="text-center">
                <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
            </td>
        `;

        // Evento eliminar
        fila.querySelector(".eliminar").addEventListener("click", () => {
            carrito.eliminar(item.nombre);
            renderizarCarrito();
        });

        listaCarrito.appendChild(fila);
    });

    // Actualizar total
    totalCarrito.textContent = `$${carrito.total.toFixed(2)}`;
}

// Limpiar inputs
function limpiarInputs() {
    inputNombre.value = "";
    inputPrecio.value = "";
}