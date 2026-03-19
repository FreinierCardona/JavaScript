const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregarTarea');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click', () => {

    if (inputTarea.value.trim() === "") return;

    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn";
    li.innerHTML = `
        ${inputTarea.value}
        <button class="btn btn-sm btn-outline-danger border-0" onclick="this.parentElement.remove()">
            <i class="bi bi-trash"></i> Eliminar
        </button>
    `;
    
    listaTareas.appendChild(li);
    inputTarea.value = "";
    
});