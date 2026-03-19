export function initNavigation() {
    // Seleccionar todos los botones con atributo data-seccion
    const navigationButtons = document.querySelectorAll('[data-seccion]');

    // Agregar event listener a cada botón
    navigationButtons.forEach((btn) => {
        btn.addEventListener('click', handleNavigation);
    });
}

function handleNavigation(event) {
    const sectionId = event.currentTarget.getAttribute('data-seccion');

    // Validar que el id existe
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.warn(`Sección con id "${sectionId}" no encontrada`);
        return;
    }

    // Ocultar todas las secciones
    const allSections = document.querySelectorAll('.ejercicio');
    allSections.forEach((section) => {
        section.classList.remove('activo');
        section.classList.add('oculto');
    });

    // Mostrar la sección seleccionada
    targetSection.classList.remove('oculto');
    targetSection.classList.add('activo');

    // Actualizar estado de botones (opcional: marcar el botón activo)
    updateActiveButton(event.currentTarget);
}

function updateActiveButton(activeButton) {
    // Remover clase active de todos los botones
    const allButtons = document.querySelectorAll('[data-seccion]');
    allButtons.forEach((btn) => btn.classList.remove('active'));

    // Agregar clase active al botón actual
    activeButton.classList.add('active');
}
