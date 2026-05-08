let currentInput = "0";

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendNumber(num) {
    if (currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    // Basic logic to prevent double operators like "++"
    const lastChar = currentInput.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteDigit() {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
    updateDisplay();
}

function calculate() {
    try {
        // eval() takes the string "5+5" and treats it as code
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    updateDisplay();
}