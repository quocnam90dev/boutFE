// Explicit(rõ ràng) types (give variable Explicit types)
let character: string
let age: number
let isLoggedIn: boolean

// age = 'luigi'
age = 30

// isLoggedIn = 25
isLoggedIn = true

// arrays
let ninjas: string[] = []

ninjas.push('shaun')

// union(liên kết) types (type1|type2)
let mixed: (string | number | boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string | number
uid = '123'
uid = 123
// uid = true

// objects
let ninjaOne: object;
ninjaOne = { name: 'Yoshi', age: 30 }
ninjaOne = [] // [] is allow cus it's object also.

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' }