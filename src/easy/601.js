import { input_601 as input } from "./inputs.js"

const nwd = (a, b) => {
  while (a != b) {
    if (a > b) {
      a -= b
    } else {
      b -= a
    }
  }
  return a
}

input.forEach((pair) => {
  console.log(nwd(...pair))
})

