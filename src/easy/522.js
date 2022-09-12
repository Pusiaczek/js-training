import { input_522 as input } from "./inputs.js"


const NWD = (num1, num2) => {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 -= num2
    } else {
      num2 -= num1
    }
  }
  return num1
}

const NWW = (num1, num2) => {
  return (num1 * num2) / NWD(num1, num2)
}

input.forEach((input) => {
  console.log(NWW(input[0], input[1]))
})