function displayShow(digit) {
    let display = document.getElementById('display');
    let length = display.value.length;
    let lastDigit = display.value.charAt(display.value.length - 1);
    const operators = ["+","-","÷","×"];

    if (length >= 20) {
        return;
    }

    if (operators.includes(lastDigit) && operators.includes(digit)){
        return;
    }
    
    display.value += digit;

    adjustFontSize(display);
}

function displayClear() {
    let display = document.getElementById('display');
    display.value = '';

    adjustFontSize(display);
}

function equals() {
    let display = document.getElementById('display');
    let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
    display.value = math.evaluate(expression);

    adjustFontSize(display);
}

function adjustFontSize(display) {
    let length = display.value.length;

    if (length > 9) {
        display.style.fontSize = `30px`;
    }
    else if (length > 21) {
        display.style.fontSize = `20px`;
    }
    else{
        display.style.fontSize = `60px`;
    }
}