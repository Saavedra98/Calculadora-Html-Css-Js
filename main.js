function fnBoton(valor) {
    if (document.getElementById('txtNumero').value == 0) {
        document.getElementById('txtNumero').value = '';
    }
    document.getElementById('txtNumero').value += valor;
}

function limpiar() {
    document.getElementById('txtNumero').value = '0';
}

function calcular() {
    let x = document.getElementById("txtNumero").value;
    let y = eval(x);
    document.getElementById("txtNumero").value = y;
}