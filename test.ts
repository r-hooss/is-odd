import { isOdd } from "https://deno.land/x/is_odd@0.1.1/index.ts";
console.log(isOdd("1")); // true
console.log(isOdd("2")); // false
console.log(isOdd("3")); // true

console.log(isOdd(4)); // false
console.log(isOdd(5)); // true
console.log(isOdd(6)); // false
