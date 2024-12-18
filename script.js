function displayShow(digit) {
    console.log(digit)
    let display = document.getElementById('display');

    if (display.value.length <= 9){
        display.value += digit;
    } else {
        alert('Digit limit reached');
    }
}

function displayClear() {
    console.log('Clear')
    let display = document.getElementById('display');

    display.value = '';
}

function equals() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}