let sum = '';

function appendToDisplay(value) {
    const output = document.getElementById("output");
    if (value === '.') {
        if (!sum.includes('.')) {
            sum += value;
            output.textContent = sum;
        }
    } else {
        sum += value;
        output.textContent = sum;
    }
}

function evaluateSum() {
    const output = document.getElementById("output");
    try {
        sum = eval(sum).toString();
        output.textContent = sum;
    } catch (error) {
        output.textContent = "Error";
    }
}

function clearSum() {
    const output = document.getElementById("output");
    sum = '';
    output.textContent = '';
}