// script.js

// Get display element
const display = document.getElementById("display");

// Define variables for storing the current input and operator
let currentInput = "";
let previousInput = "";
let operator = "";

// Handle button clicks
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;

        if (value === "C") {
            // Clear the display and reset all variables
            currentInput = "";
            operator = "";
            previousInput = "";
            display.value = "";
        } else if (value === "=") {
            // Calculate the result when "=" is pressed
            if (previousInput && operator && currentInput !== "") {
                const result = calculate(previousInput, operator, currentInput);
                display.value = result;
                previousInput = result; // Store result as previous input for future calculations
                currentInput = ""; // Clear current input for next operation
                operator = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            // Set the operator and store current input
            if (currentInput !== "") {
                previousInput = currentInput;
                currentInput = "";
                operator = value;
            }
        } else {
            // Append the number or decimal point to current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Helper function to perform calculations
function calculate(num1, op, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return "";
            }
            return num1 / num2;
        default:
            return "";
    }
}
