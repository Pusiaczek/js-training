import { input_496 as input } from "./inputs.js"

// input - array of positive integers
// console.log(<digit_of_tens> + " " + <digit_of_unity>)

//  3! = 6
//  4! = 24
//  5! = 120
//  6! = 720
//  7! = 5040
//  8! = 40320
//  9! = 362880
// 10! = 3628800

const calcFactorial = (number) => {
  if (number === 0 || number === 1) {
    return 1
  }
  let factorial = 1
  for (let i = 2; i <= number; i++) {
    factorial *= i
  }
  return factorial
}


const mathResolve = () => {
  input.forEach((number) => {
    if (number >= 10) {
      console.log(`0 0`)
      return
    }

    const factorial = calcFactorial(number)

    const unityDigits = factorial % 10
    const tensDigit = Math.floor((factorial % 100) / 10)

    // console.log(`Number: ${number}, factorial: ${factorial} | ${tensDigit} ${unityDigits}`)
    console.log(`${tensDigit} ${unityDigits}`)
  })
}
const maybeSmarter = () => {
  input.forEach((number) => {
    if (number >= 10) {
      console.log(`Number: ${number} | 0 0`)
      return
    }
    const factorial = calcFactorial(number).toString()
    const length = factorial.length

    const tensDigit = factorial[length - 2] || "0"
    const unityDigits = factorial[length - 1]

    console.log(`Number: ${number}, factorial: ${factorial} | ${tensDigit} ${unityDigits}`)
  })
}


mathResolve()
console.log("\n\n\n------------------------------------------------------\n\n\n")
maybeSmarter()