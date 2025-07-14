// Day 19 of DSA in JavaScript with programming paglu 🎀

// 2-Pointer Technique
// Sorted Arrays | Duplicate Removal | Pairs with Sum

// What You’ll Learn:
// When and why to use the 2-pointer approach

// Apply it to real problems like:

// Finding pairs

// Removing duplicates

// Reversing arrays

//  What is the 2-Pointer Technique?
//  You use two indices (pointers) that move from:

// Start and end (opposite direction) – used for sums

// Start together (same direction) – used for shifting or merging


// Pair With Target Sum (Sorted Array)

function twoSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [arr[left], arr[right]];
        else if (sum < target) left++;
        else right--;
    }

    return null;
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // [2, 4]

// ✅ Time: O(n)
// ✅ Space: O(1)


// Remove Duplicates from Sorted Array (in-place)
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1; // length of unique part
}

let arr = [1, 1, 2, 2, 3, 4, 4];
const k = removeDuplicates(arr);
console.log(arr.slice(0, k)); // [1, 2, 3, 4]

// ✅ Time: O(n)
// ✅ Space: O(1)


// Reverse an Array (in-place)

function reverseArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// ✅ Time: O(n)
// ✅ Space: O(1)


// Move Zeros to End

function moveZeros(arr) {
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// ✅ Time: O(n)
// ✅ Space: O(1)


// Check If Array is Palindrome
function isPalindromeArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindromeArray([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArray([1, 2, 3]));       // false

// ✅ Time: O(n)
// ✅ Space: O(1)

