// Day 17 of DSA in JavaScript with programming paglu 🎀

// Sets in JS – Unique Values & Removing Duplicates

// Understand the Set data structure
// Use Set to:
// Remove duplicates
// Check for existence
// Find union/intersection


// What is a Set?
// A Set is a special object that stores only unique values — no duplicates allowed.

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // ignored
console.log(mySet); // Set(2) { 1, 2 }


// | Method          | Description                |
// | --------------- | -------------------------- |
// | `add(value)`    | Adds value to set          |
// | `has(value)`    | Checks if value exists     |
// | `delete(value)` | Removes a value from set   |
// | `size`          | Returns number of elements |


// Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));
// Output: [1, 2, 3, 4, 5]

// Check if Array has Duplicates
function hasDuplicates(arr) {
    const set = new Set();

    for (let num of arr) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
}

console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 2, 3])); // true


// Intersection of Two Arrays

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];

    for (let num of arr2) {
        if (set1.has(num)) result.push(num);
    }

    return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));
// Output: [2, 3]



// Unique Characters in a String

function hasUniqueChars(str) {
    const set = new Set(str);
    return set.size === str.length;
}

console.log(hasUniqueChars("shiva"));  // true
console.log(hasUniqueChars("hello"));  // false

