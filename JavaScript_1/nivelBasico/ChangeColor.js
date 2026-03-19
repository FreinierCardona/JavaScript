function cambiarFondo(color) {
    const target = document.getElementById('page-content-wrapper');

    if (!target) return;

    // IMPORTANTE: Quitamos la clase 'bg-light' de Bootstrap para que deje ver el color de JS
    target.classList.remove('bg-light');

    // Aplicamos el color
    target.style.backgroundColor = color;

    // Si es reset o blanco, volvemos al estado original
    if (color === 'white' || color === 'reset') {
        target.style.backgroundColor = '#f8f9fa';
        target.classList.add('bg-light'); // Devolvemos la clase original
    }
}