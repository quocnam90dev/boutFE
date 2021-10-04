// Classes
class Invoice {
  // readonly client: string; // just readonly, cannot changed inside or outside class
  // private details: string; // private, cannot changed from outside class, can change inside class
  // public amount: number; // can changed inside or outside class

  // constructor (c: string, d: string, a: number) {
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }

  // SHORTHAND of initialize class
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('client 1', 'detail 01', 100)
const invTwo = new Invoice('client 2', 'detail 02', 150)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format())
})

