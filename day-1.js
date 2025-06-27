// Day 1: What is DSA + Why it Matters + Big-O notation with programming paglu 🎀

// Big-O notation is a way to measure the efficiency of an algorithm.
// It describes the upper limit of the time or space complexity of an algorithm in relation to the input size.

// Big-O		Example

// O(1)		   Accessing arr[0]
// O(n)		   Looping through an array
// O(n²)	   Nested loops
// O(log n)	   Binary search
// O(2ⁿ)	   Recursive Fibonacci

//  Create an array of 5 numbers and print each one.
num = [1, 2, 3, 4, 5];
console.log(num[0]); // Accessing the first element

num.forEach((number) => {
    console.log(number); // Looping through the array
})


// Write a function that takes a number and prints whether it is even or odd.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}
checkEvenOrOdd(10);