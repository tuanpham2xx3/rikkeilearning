"use strict";
function greet(person) {
    return `Xin chào, ${person}!`;
}
const person = process.argv[2] ?? "Thế giới";
console.log(greet(person));
