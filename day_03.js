// Day 03 of DSA in JavaScript with programming paglu 🎀

// What is an Array?
// An array is a list-like object used to store multiple values in a single variable.
const fruits = ["apple", "banana", "mango"];


// Traversing an Array // Traversing means going through each element of the array.

const arr1 = [10, 20, 30];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr[i]);
}

arr.forEach((num) => {
    console.log(num);
});

// find the array value if it is exists or not
const arr = [5, 10, 15];
const target = 10;

if (arr.includes(target)) {
    console.log("Found!");
} else {
    console.log("Not Found.");
}


// Find index of a value:
const index = arr.indexOf(15);
console.log(index); // returns -1 if not found

// practice

const num = [2, 4, 6, 8, 10];

num.forEach((num) => {
    console.log(num);
});

// find a number in an array

function searchElement(arr, target) {
    if (arr.includes(target)) {
        console.log(`${target} found`);
    } else {
        console.log(`${target} not found`);
    }
}

searchElement([1, 2, 3, 4, 5], 3);

// print the index of each element in an array

const data = ["a", "b", "c"];

data.forEach((item, index) => {
    console.log(`${item} is at index ${index}`);
});
