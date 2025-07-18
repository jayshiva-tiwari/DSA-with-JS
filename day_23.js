// Day 23 of DSA in JavaScript with programming paglu 🎀

// Recursion Questions

// 1. Sum of Array using Recursion

function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;              // base case
    return arr[index] + sumArray(arr, index + 1);    // recursive case
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15


// 2. Reverse a String using Recursion
function reverseString(str) {
    if (str.length <= 1) return str;                  // base case
    return reverseString(str.slice(1)) + str[0];      // recursive case
}

console.log(reverseString("hello")); // "olleh"


// 3. Check if a String is Palindrome

function isPalindrome(str, i = 0) {
    const j = str.length - 1 - i;
    if (i >= j) return true;
    if (str[i] !== str[j]) return false;
    return isPalindrome(str, i + 1);
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


