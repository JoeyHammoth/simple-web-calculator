var num = 0;
var result = 0;
var currOp = 0;
const screen = document.querySelector(".screen");
const clear = document.querySelector("#but-c");
const back = document.querySelector("#but-back");
const add = document.querySelector("#but-add");
const minus = document.querySelector("#but-subtract");
const prod = document.querySelector("#but-prod");
const div = document.querySelector("#but-quotient");
const equal = document.querySelector("#but-equal");
const nums = document.querySelectorAll(".num"); // getting all elements with class num

clear.addEventListener("click", function () {
    num = 0;
    result = 0;
    screen.innerText = num;
});

back.addEventListener("click", function () {
    num /= 10;
    num = Math.floor(num);
    screen.innerText = num;
});

add.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result += num;
    }
    num = 0;
    currOp = 1;
});

minus.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result -= num;
    }
    num = 0;
    currOp = 2;
});

prod.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result *= num;
    }
    num = 0;
    currOp = 3;
});

div.addEventListener("click", function () {
    if (currOp == 0) {
        result = num;
    } else {
        result /= num;
        result = Math.floor(result);
    }
    num = 0;
    currOp = 4;
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
    currOp = 0;
    result = 0;
});

nums.forEach(function (button) { // iterating through all elements part of class num
    button.addEventListener("click", function (event) {
        if (num < 1000000000) {
            num *= 10;
            num += Number(event.target.innerText);
            screen.innerText = num.toString();
        }
    });
});