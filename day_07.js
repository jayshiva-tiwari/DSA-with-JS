//  Day 07 of DSA in JavaScript with programming paglu 🎀

// 🧠 What You’ve Learned This Week:
// Day	Topic
// 1	What is DSA, Big-O
// 2	Time & Space Complexity
// 3	Array Basics + Traversing
// 4	Insert/Delete/Filter
// 5	String Basics
// 6	String Problems (palindrome, etc.)

//  Practice Problems (Solve in JavaScript)
//  1. Print all even numbers in an array
function printEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
printEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
// Input: [1, 2, 3, 4, 5, 6]
// Output: 2 4 6

//  2. Insert a number at a specific position in an array
function insertAtPosition(arr, num, index) {
    arr.splice(index, 0, num);
    return arr;
}

insertAtPosition([10, 20, 30], 99, 1); // Output: [10, 99, 20, 30]
// Input: [10, 20, 30], insert 99 at index 1
// Output: [10, 99, 20, 30]

//  3. Reverse a string without using .reverse()
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

reverseString("paglu"); // Output: "ulgap"
// Input: "paglu"
// Output: "ulgap"

//  4. Check if a word is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

isPalindrome("madam"); // Output: true
isPalindrome("hello"); // Output: false
// Input: "madam" → true
// Input: "hello" → false

//  5. Count number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

countVowels("programming paglu"); // Output: 6
// Input: "programming paglu"
// Output: 6