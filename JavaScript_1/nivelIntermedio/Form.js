document.getElementById('formularioRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('formNombre').value;
    const correo = document.getElementById('formCorreo').value;
    const edad = document.getElementById('formEdad').value;
    const mensaje = document.getElementById('mensajeForm');

    if (!nombre || !correo || !edad) {
        mensaje.innerHTML = `<div class="alert alert-danger">Debe completar todos los campos</div>`;
    } else {
        mensaje.innerHTML = `<div class="alert alert-success">Formulario enviado con éxito</div>`;
    }
});