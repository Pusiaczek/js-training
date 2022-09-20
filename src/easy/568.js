import { input_568 as input } from "./inputs.js"

const isPalindrome = (number) => {
  const string = number.toString()

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

const reverseNumber = (number) => {
  return parseInt(number.toString().split("").reverse().join(""))
}


input.forEach((number) => {
  let steps = 0
  let sum = number

  while (!isPalindrome(sum)) {
    sum = sum + reverseNumber(sum)
    steps++
  }
  console.log("Sum: ", sum, "get's in", steps, "steps!");
})

