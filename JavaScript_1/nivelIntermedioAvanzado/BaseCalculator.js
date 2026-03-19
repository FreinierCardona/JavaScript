function operar(op) {
    const n1 = parseFloat(document.getElementById('calcN1').value);
    const n2 = parseFloat(document.getElementById('calcN2').value);
    let res = 0;

    if (isNaN(n1) || isNaN(n2)) return;

    switch(op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n2 !== 0 ? n1 / n2 : 'Error (div/0)'; break;
    }
    document.getElementById('resCalculadora').textContent = `Resultado: ${res}`;
}