// Referenciamos los nuevos IDs únicos
const inputTarea8 = document.getElementById('inputTarea8');
const btnAgregar8 = document.getElementById('btnAgregarTarea8');
const listaTareas8 = document.getElementById('listaTareas8');

btnAgregar8.addEventListener('click', () => {

    if (inputTarea8.value.trim() === "") return;

    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn";
    
    // El onclick="this.parentElement.remove()" ahora funcionará perfecto
    li.innerHTML = `
        ${inputTarea8.value}
        <button class="btn btn-sm btn-outline-danger border-0" onclick="this.parentElement.remove()">
            <i class="bi bi-trash"></i> Eliminar
        </button>
    `;
    
    listaTareas8.appendChild(li);
    inputTarea8.value = "";
    inputTarea8.focus(); // Opcional: devuelve el cursor al campo
});