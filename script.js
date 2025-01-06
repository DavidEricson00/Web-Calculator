function displayShow(digit) {
    console.log(digit)

    let display = document.getElementById('display');
    let lastDigit = display.value.charAt(display.value.length - 1);
    const operators = ["+","-","/","*"];

    if (operators.includes(lastDigit) && operators.includes(digit)){
        return;
    }

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
    display.value = math.evaluate(display.value);
}