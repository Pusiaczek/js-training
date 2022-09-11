import { input_506 as input } from "./inputs.js"


// W wierszach wejścia znajdują się zestawy danych.
// Każdy zestaw składa się z niepustego wyrazu złożonego z samych dużych liter alfabetu amerykańskiego. 
// Długość wyrazu nie przekracza 200 znaków.

const outputChar = (char, counter) => {
  if (counter === 1) { return char }
  if (counter === 2) { return char + char }
  return char + counter
}


input.forEach((word) => {
  let outputWord = ""
  let index = 0
  let char = word[index]

  while (index < word.length) {
    let counter = 1

    while (char === word[index + counter]) {
      counter++
    }
    outputWord += outputChar(char, counter)
    index += counter
    char = word[index]
  }

  console.log(outputWord)
})