import { input_438 as input } from "./inputs.js"

// input - array of positive integers
// console.log("TAK") if it's prime, console.log("NIE") otherwise

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false
  }
  if (number === 2) {
    return true
  }
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      return false
    }
  }
  return true
}


input.forEach((number) => {
  if (isPrimeNumber(number)) {
    console.log(number, ": TAK")
  } else {
    console.log(number, ": NIE")
  }
})
