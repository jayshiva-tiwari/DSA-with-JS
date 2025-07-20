// Day 25 of DSA in JavaScript with programming paglu 🎀

// What is Merge Sort?
// It's a divide and conquer algorithm.

// It divides the array into halves, recursively sorts them, and merges the sorted halves.


// Merge Sort Steps:
// 1. Divide array into halves until size is 1.

// 2. Merge two sorted halves back into one sorted array.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test it!
console.log(mergeSort([5, 3, 8, 4, 2, 7, 1, 6]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

