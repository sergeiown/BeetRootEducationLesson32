import * as normal from "./normal.js";

const inputFirstNumber = document.querySelector("#first-number");
const inputSecondNumber = document.querySelector("#second-number");

const buttonToSecond = document.querySelector("#next-to-second");
const buttonToThird = document.querySelector("#next-to-third");
const buttonClear = document.querySelector("#clear");

clearInput();

// functions
function showHideSecond() {
  document.getElementById("second-step").style.display === "none"
    ? (document.getElementById("second-step").style.display = "flex")
    : (document.getElementById("second-step").style.display = "none");
}

function showHideThird() {
  document.getElementById("third-step").style.display === "none"
    ? (document.getElementById("third-step").style.display = "flex")
    : (document.getElementById("third-step").style.display = "none");
}

function clearInput() {
  inputFirstNumber.value = "";
  inputSecondNumber.value = "";

  buttonToSecond.disabled = true;
  buttonToThird.disabled = true;

  showHideSecond();
  showHideThird();
}

function buttonDisabler() {
  setTimeout(() => {
    buttonToSecond.disabled = true;
  }, 1000);
  setTimeout(() => {
    buttonToThird.disabled = true;
  }, 1000);
}

function perfectInRange() {
  const min = Number(document.querySelector("#first-number").value);
  const max = Number(document.querySelector("#second-number").value);

  document.querySelector(
    ".result-text"
  ).innerHTML = `<span>For the range with start at ${min} and end at ${max}the list of perfect numbers is:</span>`;

  document.querySelector(".rest-result").innerHTML = `<span>${
    normal.numberOfChocolates(amount, price).restAmount
  } USD</span>`;
}

// events listeners
inputFirstNumber.addEventListener("input", () => {
  buttonToSecond.disabled = false;
});

inputSecondNumber.addEventListener("input", () => {
  buttonToThird.disabled = false;
});

buttonToSecond.addEventListener("click", showHideSecond);
buttonToSecond.addEventListener("click", buttonDisabler);

buttonToThird.addEventListener("click", showHideThird);
buttonToThird.addEventListener("click", buttonDisabler);

buttonClear.addEventListener("click", clearInput);
