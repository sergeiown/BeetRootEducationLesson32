import * as normal from "./normal.js";

const buttonToSecond = document.querySelector(".next-to-second");
const buttonToThird = document.querySelector(".next-to-third");
const inputFirstNumber = document.querySelector("#first-number");
const inputSecondNumber = document.querySelector("#second-number");

function clearInput() {
  buttonToSecond.disabled = true;
  buttonToThird.disabled = true;
}

clearInput();

// expressions result
function expressionResultInfo() {
  document.querySelector(".first-result").innerHTML = `<span> result is ${
    maximum.expressionResult().first
  }</span>`;

  document.querySelector(".second-result").innerHTML = `<span> result is ${
    maximum.expressionResult().second
  }</span>`;

  document.querySelector(".third-result").innerHTML = `<span> result is ${
    maximum.expressionResult().third
  }</span>`;
}

// events listeners
inputFirstNumber.addEventListener("input", () => {
  buttonToSecond.disabled = false;
});

inputSecondNumber.addEventListener("input", () => {
  buttonToThird.disabled = false;
});

document
  .querySelector(".next-to-second")
  .addEventListener("click", showSecondStep);

document
  .querySelector(".next-to-third")
  .addEventListener("click", showThirdStep);

document.querySelector(".clear").addEventListener("click", clearInput);
