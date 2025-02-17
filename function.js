let num = 0;
let result = 0;
let currOp = 0;
const screen = document.querySelector(".screen");
const clear = document.querySelector("#but-c");
const back = document.querySelector("#but-back");
const add = document.querySelector("#but-add");
const minus = document.querySelector("#but-subtract");
const prod = document.querySelector("#but-prod");
const div = document.querySelector("#but-quotient");
const equal = document.querySelector("#but-equal");
const nums = document.querySelectorAll(".num"); // getting all elements with class num

const checkbox = document.querySelector(".debug-checkbox");
const debugNum = document.querySelector(".num-stat");
const debugRes = document.querySelector(".res-stat");
const debugOp = document.querySelector(".op-stat");

function changeDebug() {
    if (checkbox.checked) {
        debugNum.innerText = `num: ${num}`;
        debugRes.innerText = `result: ${result}`;
        debugOp.innerText = `operation: ${currOp} (0: none, 1: add, 2: sub, 3: mult, 4: div, 5: eq)`

    } else {
        debugNum.innerText = "";
        debugRes.innerText = "";
        debugOp.innerText = "";
    }
}

clear.addEventListener("click", function () {
    num = 0;
    result = 0;
    screen.innerText = num;
    changeDebug();
});

back.addEventListener("click", function () {
    num /= 10;
    num = Math.floor(num);
    screen.innerText = num;
    changeDebug();
});

add.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result += num;
    }
    num = 0;
    currOp = 1;
    changeDebug();
});

minus.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result -= num;
    }
    num = 0;
    currOp = 2;
    changeDebug();
});

prod.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else if (currOp == 5) {
        num = result;
    } else {
        result *= num;
    }
    num = 0;
    currOp = 3;
    changeDebug();
});

div.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else if (currOp == 5) {
        num = result;
    } else {
        result /= num;
        result = Math.floor(result);
    }
    num = 0;
    currOp = 4;
    changeDebug();
});

equal.addEventListener("click", function () {
    if (currOp == 1) {
        result += num;
    } else if (currOp == 2) {
        result -= num;
    } else if (currOp == 3) {
        result *= num;
    } else if (currOp == 4) {
        result /= num;
        result = Math.floor(result);
    }
    screen.innerText = result;
    currOp = 5;
    num = 0;
    changeDebug();
});

nums.forEach(function (button) { // iterating through all elements part of class num
    button.addEventListener("click", function (event) {
        if (currOp == 5) {
            currOp = 0;
        }
        if (num < 1000000000) {
            num *= 10;
            num += Number(event.target.innerText);
            screen.innerText = num.toString();
            changeDebug();
        }
    });
});

checkbox.addEventListener("input", function () {
    changeDebug();
});