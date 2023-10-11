#!/usr/bin/env node
import { multiplication, calculateAverage } from '../src/calculator.js';
import { isDivisibleBy5AndEven } from "../src/divisibleAndEvenValue.js";
import { isHappyTicket} from "../src/happyTicket.js";

// console.log('start');
const x = 2;
const y = 3;
const result = multiplication(x, y);
const output = multiplication(x, y) === x * y ? 'ok' : 'bad';
console.log(`multiplication(${x}, ${y}) = ${result}, ${output}`);
// console.log('end');
console.log(calculateAverage(-20, -2,-5,-7, -1))
console.log(isDivisibleBy5AndEven(10))
console.log("Счастливый билетик - " + isHappyTicket('385916'))