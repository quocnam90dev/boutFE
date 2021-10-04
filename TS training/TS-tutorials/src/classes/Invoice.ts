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
