import { Producto } from "./entitys/Producto.js";
import { Inventario } from "./entitys/Inventario.js";


// Crear instancia del inventario
const inventario = new Inventario();

// Referencias al DOM
const prodNombre = document.getElementById("prodNombre");
const prodPrecio = document.getElementById("prodPrecio");
const prodCant = document.getElementById("prodCant");
const btnAgregarProd = document.getElementById("btnAgregarProd");

const listaInventario = document.getElementById("listaInventario");
const totalInventario = document.getElementById("totalInventario");

// Función para renderizar productos en pantalla
function renderInventario() {
    // Limpiar lista
    listaInventario.innerHTML = "";

    // Recorrer productos
    inventario.lista.forEach(producto => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad} | Total: $${producto.valorStock}`;
        listaInventario.appendChild(li);
    });

    // Actualizar total
    totalInventario.textContent = inventario.totalInventario;
}

// Evento para agregar producto
btnAgregarProd.addEventListener("click", () => {
    try {
        const nombre = prodNombre.value.trim();
        const precio = parseFloat(prodPrecio.value);
        const cantidad = parseInt(prodCant.value);

        if (!nombre) throw new Error("Ingrese el nombre del producto.");
        const producto = new Producto(nombre, precio, cantidad);
        inventario.agregar(producto);
        renderInventario();

        // Limpiar inputs
        prodNombre.value = "";
        prodPrecio.value = "";
        prodCant.value = "";

    } catch (error) {
        alert(error.message);
    }
});