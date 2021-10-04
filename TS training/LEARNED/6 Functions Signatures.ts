// FUNCTION signatures

// let greet: Function;

// ex 1
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// ex 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action == 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

// ex 3
let logDetails: (obj: {name: string, age: number}) => void

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`)
}