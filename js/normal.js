function isPerfect(number) {
  let divisor = 1;
  let sumDivisor = 0;
  while (divisor < number) {
    if (number % divisor == 0) {
      sumDivisor += divisor;
    }
    divisor++;
  }
  if (sumDivisor == number) {
    return true;
  } else {
    return false;
  }
}

function isPerfectInRange(min, max) {
  let arrPerfect = [];
  let warning = false;

  if (min < 1 || max <= min || max > 50000) {
    return warning;
  } else {
    for (let i = min; i <= max; i++) {
      if (isPerfect(i)) {
        arrPerfect.push(i);
      }
    }
  }

  return arrPerfect;
}

// console.log(isPerfectInRange(1, 50000));

export { isPerfect, isPerfectInRange };
