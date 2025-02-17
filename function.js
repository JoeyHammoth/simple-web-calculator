var num = 0;
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
    screen.innerText = num;
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