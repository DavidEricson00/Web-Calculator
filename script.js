function displayShow(digit) {
    let display = document.getElementById('display');
    let length = display.value.length;
    let lastDigit = display.value.charAt(display.value.length - 1);
    const operators = ["+","-","÷","×"];

    if (length >= 20) {
        return;
    }
    
    if (display.value === "Infinity" || display.value === "NaN") {
        displayClear();
    }

    if ((operators.includes(lastDigit) && operators.includes(digit)) || (display.value === "" && operators.includes(digit))){
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
    display.style.transition = 'font-size 0.3s ease'; 

    if (length > 9) {
        display.style.fontSize = `30px`;
    } else{
        display.style.fontSize = `60px`;
    }
}