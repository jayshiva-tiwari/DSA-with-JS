// Day 04 of DSA in JavaScript with programming paglu 🎀

//Arrays Insert/Delete/Update – push, pop, splice, filter


// today's goals
// Learn how to add and remove elements in arrays
// Understand how to use splice() and filter()
// Solve 4 hands-on JS problems

// push() → Add to end
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
// pop() → Remove from end
arr.pop();
console.log(arr); // [1, 2, 3]
// unshift() → Add to start
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
// shift() → Remove from start
arr.shift();
console.log(arr); // [1, 2, 3]


// splice(start, deleteCount, newItem) → Add/Remove in middle
const items = [1, 2, 3, 4, 5];
items.splice(2, 1); // removes 1 item at index 2
console.log(items); // [1, 2, 4, 5]

items.splice(1, 0, 99); // insert 99 at index 1
console.log(items); // [1, 99, 2, 4, 5]

// filter() → Keep values that match condition
const nums = [1, 2, 3, 4, 5];
const even = nums.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

// task :

// Task 1: Add a number to the end of array 
//  Task 2: Remove the last element
//  Task 3: Insert a number at index 1
//  Task 4: Filter out all even numbers