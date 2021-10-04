// Interface
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

interface IsPerson {
  addMoreProp: number
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
  },
  addMoreProp: 20
}

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name)
}

greetPerson(me)

console.log(me)

// other usage
// in "../interfaces/HasFormatter.js";
export interface HasFormatter {
  format(): string
}
import { HasFormatter } from "../interfaces/HasFormatter.js";
// Modules
export class Invoice implements HasFormatter {
  // SHORTHAND of initialize class
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
