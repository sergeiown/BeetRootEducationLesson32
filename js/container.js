import * as normal from "./normal.js";

const inputFirstNumber = document.querySelector("#first-number");
const inputSecondNumber = document.querySelector("#second-number");

const buttonToSecond = document.querySelector("#next-to-second");
const buttonToThird = document.querySelector("#next-to-third");
const buttonClear = document.querySelector("#clear");
const buttonReturn = document.querySelector("#return");

showHideWarning();
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

function showHideWarning() {
  document.getElementById("warning-window").style.display === "none"
    ? (document.getElementById("warning-window").style.display = "flex")
    : (document.getElementById("warning-window").style.display = "none");
}

function clearInput() {
  inputFirstNumber.value = "";
  inputSecondNumber.value = "";

  buttonToSecond.disabled = true;
  buttonToThird.disabled = true;

  showHideSecond();
  showHideThird();
}

function returnToInput() {
  inputFirstNumber.value = "";
  inputSecondNumber.value = "";

  buttonToSecond.disabled = true;
  buttonToThird.disabled = true;

  showHideSecond();
  showHideThird();
  showHideWarning();
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
  const timerStart = new Date().getTime();
  const min = Number(document.querySelector("#first-number").value);
  const max = Number(document.querySelector("#second-number").value);

  if (!normal.isPerfectInRange(min, max)) {
    showHideWarning();
  } else {
    document.querySelector(
      ".result-text"
    ).innerHTML = `<span>For the range from <strong>${min}</strong> to <strong>${max}</strong> the list of perfect numbers is:</span>`;

    document.querySelector(".result-arr").innerText = normal.isPerfectInRange(
      min,
      max
    );
  }
  const timerStop = new Date().getTime() - timerStart;
  document.querySelector(".result-timer").innerText = `The calculation takes ${(
    timerStop / 1000
  ).toFixed(3)} second(s).`;
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
buttonToThird.addEventListener("click", perfectInRange);

buttonClear.addEventListener("click", clearInput);
buttonReturn.addEventListener("click", returnToInput);
