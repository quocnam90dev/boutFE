// Dynamic (any) Types
let age: any = 25
age = '30'
age = true
age = []
age = {}

let mixed: any[] = []

mixed.push(5)
mixed.push('hello')
mixed.push(false)

console.log(mixed)

let ninja: { name: any, age: any }
ninja = {name: 1231243, age: false}
console.log(ninja)