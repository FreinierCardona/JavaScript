let contador = 0;
const btnContar = document.getElementById('btnContar');
const txtContador = document.getElementById('txtContador');

btnContar.addEventListener('click', () => {
   
    contador++;
    txtContador.textContent = `Clics: ${contador}`;

});