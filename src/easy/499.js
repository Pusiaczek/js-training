import { input_499 as input } from "./inputs.js"


// input - array of positive pair of integers (a - base, b - power)
// console.log(<digit_of_unity>)

// Dla danych dwóch liczb naturalnych a i b, wyznaczyć ostatnią cyfrę liczby a^b.

const getUnityDigit = (number) => {
  return number % 10
}

const calculateResult = (base, power) => {
  if (power === 0) { return 1 }
  if (power === 1) { return getUnityDigit(base) }

  let result = base;
  for (let i = 1; i < power; i++) {
    result = getUnityDigit(result) * base
  }
  return getUnityDigit(result)
}

input.forEach((input) => {
  // console.log(Math.pow(input[0], input[1]), calculateResult(input[0], input[1]))
  console.log(calculateResult(input[0], input[1]))
})
