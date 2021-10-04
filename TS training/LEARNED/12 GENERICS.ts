// GENERICS = <T> (obj: T)
// extends object
const addUID = <T extends { name: string, age: number }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000)
  return { ...obj, uid }
}
let docOne = addUID({ name: 'yhosi', age: 40 })
// let docTwo = addUID('hello')
console.log(docOne.age)

const addUID2 = <T extends { agee: number, namee: boolean, asdzxc: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000)
  return { ...obj, uid }
}

let docww = addUID2({ agee: 2, asdzxc: 'awdawd', namee: true })

// with interfaces
interface Resource<T> {
  uid: number
  resourceName: string
  data: T
}

const docThree: Resource<number> = {
  uid: 1,
  resourceName: 'person',
  data: "{ name: 'asdasd' }"
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['test', 'array', 'milk']
}

console.log(docThree, docFour)