import { isOdd, isEven } from "./index";
console.log(isOdd("1")); // true
console.log(isOdd("2")); // false
console.log(isOdd("3")); // true

console.log(isOdd(4)); // false
console.log(isOdd(5)); // true
console.log(isOdd(6)); // false

console.log(isEven("1")); // false
console.log(isEven("2")); // true
console.log(isEven("3")); // false

console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(6)); // true