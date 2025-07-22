// Day 27 of DSA in JavaScript with programming paglu 🎀

//  What is Searching?
// Searching = Finding an element’s index (or checking its presence) in a list/array.


// Linear Search (Brute Force)
// Check every element one-by-one.

// Works on unsorted arrays.

// Time Complexity: O(n)

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;  // Found!
    }
    return -1;  // Not found
}

console.log(linearSearch([10, 20, 30, 40], 30));  // Output: 2


// Binary Search (Efficient but needs sorted array)
// Repeatedly divide the array in half

// Works only on sorted arrays

// Time Complexity: O(log n)


// How it Works:
// Check middle element.

// If target < mid → search left.

// If target > mid → search right.

// Repeat until found or left > right.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // Output: 3
