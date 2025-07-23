// Day 28 of DSA in JavaScript with programming paglu 🎀

// Topics Covered:
// First Occurrence

// Last Occurrence

// Count of Occurrences


// 1. First Occurrence of Target
// 🔎 Return index of first occurrence of the target in a sorted array (with duplicates).

function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;           // store result
            right = mid - 1;        // but keep checking left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log(firstOccurrence([1, 2, 4, 4, 4, 5, 6], 4));  // Output: 2


// 2. Last Occurrence of Target
// 🔎 Return index of last occurrence of the target.

function lastOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            left = mid + 1;  // check right side
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log(lastOccurrence([1, 2, 4, 4, 4, 5, 6], 4));  // Output: 4


// 3. Count Occurrence
// 🔎 Use First and Last Occurrence to find how many times a number appears.

function countOccurrences(arr, target) {
    let first = firstOccurrence(arr, target);
    let last = lastOccurrence(arr, target);

    if (first === -1) return 0;  // not found
    return last - first + 1;
}

console.log(countOccurrences([1, 2, 4, 4, 4, 5, 6], 4));  // Output: 3
