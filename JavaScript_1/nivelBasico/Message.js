// MOSTRAR MENSAJE EN LA PANTALLA

let button = document.getElementById("btnMensaje");
let message = document.getElementById("resultado");
let vista = false;

// El boton reacciona a el click
button.addEventListener("click", function(){

    message.textContent = "Hola Mundo desde JavaScript";

    if (vista === false) {
        message.style.display = "block"; 
        vista = true;
    }else{
        message.style.display = "none"; 
        vista = false;
    }
});
