import { HasFormatter } from "../interfaces/HasFormatter.js";
// Modules
export class Payment implements HasFormatter {
  // SHORTHAND of initialize class
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`
  }
}
