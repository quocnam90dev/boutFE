// Interface
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log(`i spent `, amount)
    return amount
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name)
}

greetPerson(me)

console.log(me)

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value == 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Invoice(...values)
  }

  list.render(doc, type.value, 'end')

})

// Tuples
let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yoshi'
arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ken'
tup[1] = 30

// let student: [string, number]
// student = [23123, 'awdaw']
// student = ['chun-li', 223231]