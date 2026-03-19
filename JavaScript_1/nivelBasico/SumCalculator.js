// Capturamos los elementos del DOM

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnSumar = document.getElementById('btnSumar');
const resultadoSuma = document.getElementById('resultadoSuma');

// Agregamos el evento click
btnSumar.addEventListener('click', () => {

    // Convertimos los valores a números (por defecto los inputs devuelven texto)
    const valor1 = parseFloat(num1.value) || 0; 
    const valor2 = parseFloat(num2.value) || 0;
    
    const suma = valor1 + valor2;
    resultadoSuma.textContent = `El resultado de la suma es: ${suma}`;
    
});