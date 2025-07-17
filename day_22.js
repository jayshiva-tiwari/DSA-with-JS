// Day 22 of DSA in JavaScript with programming paglu 🎀

// What is Recursion?
// Recursion is when a function calls itself to solve a smaller version of the problem.

// Every recursive function has:

// ✅ Base Case – when to stop recursion

// 🔁 Recursive Case – call the function again with smaller input


// 1: Factorial

function factorial(n) {
    if (n === 0 || n === 1) return 1;         // Base case
    return n * factorial(n - 1);              // Recursive call
}

console.log(factorial(5)); // 120


// 2: Fibonacci

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8