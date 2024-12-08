function somar() {
    let valorNum1 = parseInt(document.getElementById('num1').value)
    let valorNum2 = parseInt(document.getElementById('num2').value)

    let refResultado = document.getElementById('resultado')
    refResultado.value = valorNum1 + valorNum2
}

function subtrair() {
    let valorNum1 = parseInt(document.getElementById('num1').value)
    let valorNum2 = parseInt(document.getElementById('num2').value)

    let refResultado = document.getElementById('resultado')
    refResultado.value = valorNum1 - valorNum2
}


function multiplicar() {
    let valorNum1 = parseInt(document.getElementById('num1').value)
    let valorNum2 = parseInt(document.getElementById('num2').value)

    let refResultado = document.getElementById('resultado')
    refResultado.value = valorNum1 * valorNum2
}


function dividir() {
    let valorNum1 = parseInt(document.getElementById('num1').value);
    let valorNum2 = parseInt(document.getElementById('num2').value);

    let refResultado = document.getElementById('resultado');

    if (valorNum2 == 0){
        refResultado.value = "Divisão por 0"
    } else{
        refResultado.value = valorNum1 / valorNum2
    }
}