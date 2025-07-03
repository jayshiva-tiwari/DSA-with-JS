//  Day 08 of DSA in JavaScript with programming paglu 🎀

// Stack – Concept + Push, Pop, Top 
// Today’s Goals:
// Understand what a stack is
// Learn how to implement stack in JavaScript
// Practice push(), pop(), peek() (aka top)
// Build your first stack logic!

// What is a Stack?
// A stack is a linear data structure that follows the LIFO principle — Last In, First Out

// | Operation   | Description                       |
// | ----------- | --------------------------------- |
// | `push(x)`   | Add item `x` to top of stack      |
// | `pop()`     | Remove item from top of stack     |
// | `peek()`    | See the top item without removing |
// | `isEmpty()` | Check if the stack is empty       |

const stack = [];

stack.push(10); // [10]
stack.push(20); // [10, 20]

stack.pop(); // removes 20 → stack is now [10]

// peek/top
const top = stack[stack.length - 1];
console.log(top); // 10

const isEmpty = stack.length === 0;
console.log(isEmpty); // false


// task 

// Create a stack and push 3 numbers

stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack); // [5, 10, 15]

// Pop the top number and show the stack
stack.pop();
console.log(stack); // [5, 10]

// Print the top number without removing it
console.log(stack[stack.length - 1]); // 10

// Check if the stack is empty
console.log(stack.length === 0); // false

