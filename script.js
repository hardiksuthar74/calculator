const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const display = document.querySelector("#result");

let x = 0;
let sum = 0;
let sign;

numbers.forEach((number) => {
  number.addEventListener("click", () => (x = parseInt(number.textContent)));
});
