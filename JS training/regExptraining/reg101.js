var re1 = new RegExp("abc")
var re2 = /abc/

console.log(/abc/.test("abcde"))
console.log(/abc/.test("a dasad abc"))

console.log(/[0123456789]/.test("in 1992"))
console.log(/[0-9]/.test("in 199j"))
