// Day 06 of DSA in JavaScript with programming paglu 🎀

// Common String Questions – Palindrome, Reverse, Vowel Count

//  Goals for Today:
//  Solve 3 real DSA string problems
//  Learn how to use string logic in conditions & loops
//  Practice thinking like a problem solver

//  A string is palindrome if it reads the same forward and backward.
//  example: madam , kayak, level

//  1. Check if a string is a palindrome

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//  2. Count the number of palindromes in a list
function countPalindromes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            count++;
        }
    }
    return count;
}
console.log(countPalindromes(["madam", "hello", "level", "world", "kayak"])); // 3
//  3. Find the longest palindrome in a list
function findLongestPalindrome(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i]) && arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
console.log(findLongestPalindrome(["madam", "hello", "level", "world", "kayak"])); // "madam"
//  4. Count the number of vowels in a string
function checkVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(checkVowels("Hello World")); // 3
//  5. Reverse a string without using .reverse()
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("shiva")); // "avihs"
