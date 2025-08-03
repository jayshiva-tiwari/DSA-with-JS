// Day 02 with programming paglu 🎀

// Time Complexity: How long your code takes to run (based on input size)


const arr = [1, 2, 3, 4,5,6,7,8,9,10]

// O(1) → Constant Time
function printFirst(arr) {
    console.log(arr[0]); // Always 1 step
}
printFirst(arr);

// O(n) → Linear Time
function printAll(arr) {
    arr.forEach((item) => {
        console.log(item); // Takes time proportional to the size of the array
    });
}
printAll(arr);

// Space Complexity: How much memory your code uses.

// O(1) → No extra space
function add(a, b) {
    return a + b;
}

add(2,2)

// O(n) → Linear Space
function createArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i); // Uses space proportional to n
    }
    return arr;
}

createArray(5);

// Practice problems 

// Print all elements of an array
// Expected: O(n) Time
function printAllElements(n) {
    n.forEach((item) => {
        console.log(item)
    });
}
printAllElements(arr);


// Count how many numbers are even in an array
function Count(arr) {
    let count = 0;
    arr.forEach((num) => {
        if (num % 2 === 0) {
            count++;
        }
    });
    console.log(`There are ${count} even numbers in the array.`);
}

Count(arr);

//  Print all pairs from array
function pairs(arr) {
    for(let i = 0; i< arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}

pairs(arr);

