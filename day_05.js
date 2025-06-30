//  Day 05 of DSA in JavaScript with programming paglu 🎀

// Understand how strings work in JavaScript
// Learn important string methods
// Practice 4 common string problems

// A string is a sequence of characters like text or words.
const name = "Shiva";

// string methods

const naam = "Shiva";
console.log(naam.length); // 5

const word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"
console.log(word.slice(4));    // "Script"

const first = "Hello";
const second = "World";
console.log(first + " " + second);         // "Hello World"
console.log(first.concat(" ", second));    // "Hello World"


const str = "paglu";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "ulgap"


// find the length of a string
function findLength(str) {
    return str.length;
}
console.log(findLength("Hello")); // 5

// slice a string

function sliceString(str, start, end) {
    return str.slice(start, end);
}
console.log(sliceString("JavaScript", 0, 4)); // "Java"

// Combine two strings with space

function combineStrings(str1, str2) {
    return str1 + " " + str2;
}
console.log(combineStrings("Hello", "World")); // "Hello World"

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("paglu")); // "ulgap"
