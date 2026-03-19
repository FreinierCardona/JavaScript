let segundos = 0;
let intervalo;

const display = document.getElementById('displayTimer');

document.getElementById('btnStart').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        segundos++;
        display.textContent = `${segundos.toString().padStart(2, '0')}s`;
    }, 1000);
});

document.getElementById('btnStop').addEventListener('click', () => clearInterval(intervalo));

document.getElementById('btnReset').addEventListener('click', () => {
    clearInterval(intervalo);
    segundos = 0;
    display.textContent = "00s";
});