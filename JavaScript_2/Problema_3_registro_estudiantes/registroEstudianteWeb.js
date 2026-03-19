import { Estudiante } from "./entitys/Estudiante.js";

// Array para almacenar estudiantes
const estudiantes = [];

// Referencias al DOM
const estudianteNombre = document.getElementById("estudianteNombre");
const estudianteNota = document.getElementById("estudianteNota");
const btnRegistrarEstudiante = document.getElementById("btnRegistrarEstudiante");

const resultadoEstudiante = document.getElementById("resultadoEstudiante");
const displayEstudianteNombre = document.getElementById("displayEstudianteNombre");
const displayEstudianteNota = document.getElementById("displayEstudianteNota");
const badgeEstado = document.getElementById("badgeEstado");

// Evento registrar estudiante
btnRegistrarEstudiante.addEventListener("click", () => {
    try {
        const nombre = estudianteNombre.value.trim();
        const nota = parseFloat(estudianteNota.value);

        if (!nombre) throw new Error("Ingrese el nombre del estudiante.");

        // Crear estudiante
        const estudiante = new Estudiante(nombre, nota);
        // Guardar en lista
        estudiantes.push(estudiante);
        // Mostrar en pantalla (último registrado)
        mostrarEstudiante(estudiante);
        // Limpiar inputs
        estudianteNombre.value = "";
        estudianteNota.value = "";

    } catch (error) {
        alert(error.message);
    }
});

// Función para mostrar estudiante
function mostrarEstudiante(estudiante) {
    displayEstudianteNombre.textContent = estudiante.nombre;
    displayEstudianteNota.textContent = `Nota: ${estudiante.nota}`;

    // Estado aprobado/reprobado
    if (estudiante.aprobado) {
        badgeEstado.textContent = "Aprobado";
        badgeEstado.className = "bg-success text-white fs-5 fw-bold px-4 py-2 rounded-pill";
    } else {
        badgeEstado.textContent = "Reprobado";
        badgeEstado.className = "bg-danger text-white fs-5 fw-bold px-4 py-2 rounded-pill";
    }

    // Mostrar contenedor
    resultadoEstudiante.classList.remove("d-none");
}