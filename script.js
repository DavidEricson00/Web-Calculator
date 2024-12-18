function displayShow(digit) {
    console.log(digit)
    let display = document.getElementById('display');

    if (display.value.length <= 9){
        display.value += digit;
    }
}

function displayClear() {
    console.log('Clear')
    let display = document.getElementById('display');

    display.value = '';
}