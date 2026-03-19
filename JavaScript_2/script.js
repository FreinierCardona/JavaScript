import { initNavigation } from './navigation.js';

// Inicializar navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});

function mostrarSeccion(id) {
    document.querySelectorAll('.ejercicio').forEach(sec => {
        sec.classList.add('oculto');
    });

    document.getElementById(id).classList.remove('oculto');
}

// 👇 Hacerla global
window.mostrarSeccion = mostrarSeccion;