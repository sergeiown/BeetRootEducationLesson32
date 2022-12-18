function isPerfect(number) {
  let divisor = 1;
  let sumDivisor = 0;
  while (divisor < number) {
    if (number % divisor == 0) {
      sumDivisor += divisor;
    }
    divisor++;
  }
  if (sumDiv == number) {
    return true;
  } else {
    return false;
  }
}

function isPerfectInRange(min, max) {
  let arrPerfect = [];
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) {
      arrPerfect.push(i);
    }
  }
  return arrPerfect;
}

export { isPerfect, isPerfectInRange };
