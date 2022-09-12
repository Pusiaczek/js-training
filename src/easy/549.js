import { input_549 as input } from "./inputs.js"


const add = (inputs) => {
  return inputs.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur)
  })
}

input.forEach((string) => {
  const numbers = string.split(" ")
  console.log(add(numbers))
})