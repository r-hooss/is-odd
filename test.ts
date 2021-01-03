import { isOdd } from "https://deno.land/x/is_odd/index.ts";

console.log(isOdd("1")); // true
console.log(isOdd("2")); // false
console.log(isOdd("3")); // true

console.log(isOdd(4)); // false
console.log(isOdd(5)); // true
console.log(isOdd(6)); // false

console.log(isOdd(-1)); // true
console.log(isOdd("-2")); // false

console.log(isOdd("owo")); // RangeError: expected an integer
console.log(isOdd(9007199254740992)); // RangeError: value exceeds maximum safe integer
