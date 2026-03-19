// Menu de Navegacion
function mostrarEjercicio(idEjercicio, elementoBoton) {

    // 1. Ocultar todos los ejercicios
    const ejercicios = document.querySelectorAll('.ejercicio');
    ejercicios.forEach(ej => {
        ej.classList.remove('activo');
        ej.classList.add('oculto');
    });

    // 2. Mostrar solo el ejercicio seleccionado
    const ejercicioSeleccionado = document.getElementById(idEjercicio);
    ejercicioSeleccionado.classList.remove('oculto');
    ejercicioSeleccionado.classList.add('activo');

    // 3. Quitar la clase 'active' de todos los botones del menú
    const botones = document.querySelectorAll('.btn-nav');
    botones.forEach(btn => {
        btn.classList.remove('active');
    });

    // 4. Agregar la clase 'active' solo al botón que se presionó
    // Si la función se llama desde el HTML con 'this', elementoBoton tendrá el elemento
    if (elementoBoton) {
        elementoBoton.classList.add('active');
    }
}