// Day 09 of DSA in JavaScript with programming paglu 🎀

// Stack Problems – Valid Parentheses & Min Stack
// Today's Goals:
// Solve 2 famous stack problems
// Practice thinking in terms of LIFO
// Understand how to use stack to track state

// Problem:
// Given a string with just '(', ')', '{', '}', '[', ']', return true if the parentheses are balanced.

function isPalindrome(s) {
    const stack = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }


    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("({[]})"));
console.log(isValid("({[})"));


// Problem:
// Implement a stack with push, pop, top, and getMin – all in O(1) time.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (
            this.minStack.length === 0 ||
            x <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(x);
        }
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Test it
const s = new MinStack();
s.push(5);
s.push(2);
s.push(10);
console.log(s.getMin()); // 2
s.pop();
s.pop();
console.log(s.getMin()); // 5
