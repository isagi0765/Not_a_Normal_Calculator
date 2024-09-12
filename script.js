let display = document.getElementById("result");
let isFunMode = false; // Initialize Fun Mode state

function appendCharacter(character) {
    display.value += character;
}

function clearScreen() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    if (isFunMode) {
        // If in fun mode, concatenate strings
        display.value = display.value.replace(/[\+\-\*\/]/g, '') + '';
    } else {
        // Normal mode, perform mathematical operations
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}

function toggleFunMode() {
    isFunMode = !isFunMode; // Toggle between true and false
    if (isFunMode) {
        alert("Fun Mode Activated! All operations will concatenate strings.");
    } else {
        alert("Fun Mode Deactivated! Back to normal operations.");
    }
}