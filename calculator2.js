//Javascript doc
//Calculator - Candice Rogers-Siers
//28 Aug 2017

var display;
var value1, value2, valueP, result;
var lastOperation;
var clearDisplayNextKeystroke;
var thereCanBeOnlyOne;

window.onload = initAll;

function initAll() {
    document.getElementById("btnExponent").onclick = btnExponent_onClick;
    document.getElementById("btnSin").onclick = btnSin_onClick;
    document.getElementById("btnCos").onclick = btnCos_onClick;
    document.getElementById("btnSquareRoot").onclick = btnSquareRoot_onClick;
    document.getElementById("btnClear").onclick = btnClear_onclick;
    document.getElementById("btnChangeSign").onclick = btnChangeSign_onclick;
    document.getElementById("btnPercent").onclick = btnPercent_onclick;
    document.getElementById("btnDivide").onclick = btnDivide_onclick;
    document.getElementById("btnAdd").onclick = btnAdd_onclick;
    document.getElementById("btnSubtract").onclick = btnSubtract_onclick;
    document.getElementById("btnMultiply").onclick = btnMultiply_onclick;
    document.getElementById("btnDecimal").onclick = btnDecimal_onclick;
    document.getElementById("btnEqual").onclick = btnEqual_onclick;


    document.getElementById("btn0").onclick = btn0_onclick;
    document.getElementById("btn1").onclick = btn1_onclick;
    document.getElementById("btn2").onclick = btn2_onclick;
    document.getElementById("btn3").onclick = btn3_onclick;
    document.getElementById("btn4").onclick = btn4_onclick;
    document.getElementById("btn5").onclick = btn5_onclick;
    document.getElementById("btn6").onclick = btn6_onclick;
    document.getElementById("btn7").onclick = btn7_onclick;
    document.getElementById("btn8").onclick = btn8_onclick;
    document.getElementById("btn9").onclick = btn9_onclick;

    display = "0";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    buttonClick();
}

function btnClear_onclick() {
    value1 = null;
    value2 = null;
    display = "0";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    buttonClick();
}

//perform math function to value1 and value2
function btnEqual_onclick() {
    if (lastOperation == "ADD") {
        value2 = parseFloat(display);
        result = value1 + value2;
        display = result;
    }
    if (lastOperation == "SUBTRACT") {
        value2 = parseFloat(display);
        result = value1 - value2;
        display = result;
    }
    if (lastOperation == "MULTIPLY") {
        value2 = parseFloat(display);
        result = value1 * value2;
        display = result;
    }
    if (lastOperation == "DIVIDE") {
        value2 = parseFloat(display);
        result = value1 / value2;
        display = result;
    }
    if (lastOperation == "EXPONENT") {
        value2 = parseFloat(display);
        result = Math.pow(value1, value2);
        display = result;
    }

    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value1 = null;
    value2 = null;
    buttonClick();
}

function btnExponent_onClick() {
    if (value1 == null) { //first time the exponent key was pushed
        value1 = parseFloat(display);
    }

    lastOperation = "EXPONENT";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

function btnSquareRoot_onClick() {
    //Math.sqrt(64);      // returns 8
    if (value1 == null) { //first time the exponent key was pushed
        value1 = parseFloat(display);
    }
    result = Math.sqrt(value1);
    display = result;
    value1 = result;

    lastOperation = "SQUAREROOT";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value1 = result;
    value2 = 0;
    buttonClick();
}

function btnSin_onClick() {
    //Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
    if (value1 == null) {
        value1 = parseFloat(display);
    }
    result = Math.sin(value1 * (Math.PI / 180));
    display = result;

    lastOperation = "SIN";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value1 = result;
    buttonClick();
}

function btnCos_onClick() {
    //Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
    if (value1 == null) {
        value1 = parseFloat(display);
    }
    result = Math.cos(value1 * Math.PI / 180);
    display = result;

    lastOperation = "COS";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value1 = result;
    buttonClick();
}

function btnChangeSign_onclick() {
    document.getElementById("txtDisplay").innerHTML = display;
    display = display.toString();
    if (display.indexOf("-") == 0) { //negative sign in front
        display = display.substring(1); //strips off the - sign
    } else {
        display = "-" + display;
    }
    buttonClick();
}

function btnAdd_onclick() {
    if (value1 == null) { //first time the Plus key was pushed
        value1 = parseFloat(display);
    } else {
        value2 = parseFloat(display);
        result = value1 + value2;
        display = result;
        value1 = result;

    }
    lastOperation = "ADD";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

function btnSubtract_onclick() {
    if (value1 == null) { //first time the Plus key was pushed
        value1 = parseFloat(display);
    } else {
        value2 = parseFloat(display);
        result = value1 - value2;
        display = result;
        value1 = result;
    }
    lastOperation = "SUBTRACT";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

function btnMultiply_onclick() {
    if (value1 == null) { //first time the Plus key was pushed
        value1 = parseFloat(display);
    } else {
        value2 = parseFloat(display);
        result = value1 * value2;
        display = result;
        value1 = result;
    }
    lastOperation = "MULTIPLY";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

function btnDivide_onclick() {
    if (value1 == null) { //first time the Plus key was pushed
        value1 = parseFloat(display);
    } else {
        value2 = parseFloat(display);
        result = value1 / value2;
        display = result;
        value1 = result;
    }
    lastOperation = "DIVIDE";
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

function btnPercent_onclick() {
    if (value1 == null) { //first time the Plus key was pushed
        display = "0";
    } else {
        value2 = parseFloat(display);
        valueP = value2 / 100;
        result = value1 * valueP;
        display = result;

    }
    thereCanBeOnlyOne = false;
    clearDisplayNextKeystroke = true;
    value2 = 0;
    buttonClick();
}

//places a decimal point and ensures there is only one decimal in a number
function btnDecimal_onclick() {
    if (!clearDisplayNextKeystroke) {
        if (!thereCanBeOnlyOne) {
            display += ".";
            thereCanBeOnlyOne = true;
        } else {
            display += "";
        }
    } else {
        display = "0.";
        clearDisplayNextKeystroke = false;
        thereCanBeOnlyOne = true;
    }
    buttonClick();
}

//puts or adds a digit to the display

function btn0_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "0";
    } else {
        display = "0";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn1_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "1";
    } else {
        display = "1";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn2_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "2";
    } else {
        display = "2";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn3_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "3";
    } else {
        display = "3";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn4_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "4";
    } else {
        display = "4";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn5_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "5";
    } else {
        display = "5";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn6_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "6";
    } else {
        display = "6";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn7_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "7";
    } else {
        display = "7";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn8_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "8";
    } else {
        display = "8";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function btn9_onclick() {
    if (!clearDisplayNextKeystroke) {
        display += "9";
    } else {
        display = "9";
        clearDisplayNextKeystroke = false;
    }
    buttonClick();
}

function buttonClick() {
    document.getElementById("txtDisplay").innerHTML = display;
    display = display.toString();
    if (display.indexOf("-") == 0) {
        document.getElementById("txtDisplay").className = "red";
    } else {
        document.getElementById("txtDisplay").className = "black";
    }
}
