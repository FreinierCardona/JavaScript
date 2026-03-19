import { Libro } from "./entitys/Libro.js";

// Variable para guardar el libro actual
let libro = null;

// Elementos del DOM
const inputTitulo = document.getElementById("libroTitulo");
const inputAutor = document.getElementById("libroAutor");
const btnRegistrar = document.getElementById("btnRegLibro");

const panelLibro = document.getElementById("panelLibro");
const infoLibro = document.getElementById("infoLibro");
const estadoLibro = document.getElementById("estadoLibro");

const btnPrestar = document.getElementById("btnPrestar");
const btnDevolver = document.getElementById("btnDevolver");

// Registrar libro
btnRegistrar.addEventListener("click", () => {
    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();

    if (!titulo || !autor) {
        alert("Completa todos los campos");
        return;
    }

    libro = new Libro(titulo, autor);

    panelLibro.classList.remove("d-none"); // Mostrar panel
    actualizarVista();
});

// Prestar libro
btnPrestar.addEventListener("click", () => {
    if (!libro) return;

    const prestado = libro.prestar();

    if (!prestado) {
        alert("El libro ya está prestado");
    }

    actualizarVista();
});

// Devolver libro
btnDevolver.addEventListener("click", () => {
    if (!libro) return;

    libro.devolver();
    actualizarVista();
});

// Actualizar interfaz
function actualizarVista() {
    infoLibro.textContent = `${libro.titulo} - ${libro.estado}`;

    estadoLibro.textContent = libro.estado;

    // Cambiar color según estado
    if (libro.esPrestable) {
        estadoLibro.classList.remove("bg-danger");
        estadoLibro.classList.add("bg-success");
    } else {
        estadoLibro.classList.remove("bg-success");
        estadoLibro.classList.add("bg-danger");
    }
}