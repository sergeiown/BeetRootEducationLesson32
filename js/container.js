// import * as normal from "./normal.js";

const inputFirstNumber = document.querySelector("#first-number");
const inputSecondNumber = document.querySelector("#second-number");

const buttonToSecond = document.querySelector("#next-to-second");
const buttonToThird = document.querySelector("#next-to-third");
const buttonClear = document.querySelector("#clear");

// document.getElementById("second-step").style.display = "none";
// document.getElementById("third-step").style.display = "none";

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

clearInput();

// events listeners
inputFirstNumber.addEventListener("input", () => {
  buttonToSecond.disabled = false;
});

inputSecondNumber.addEventListener("input", () => {
  buttonToThird.disabled = false;
});

buttonToSecond.addEventListener("click", showHideSecond);

buttonToThird.addEventListener("click", showHideThird);

buttonClear.addEventListener("click", clearInput);
