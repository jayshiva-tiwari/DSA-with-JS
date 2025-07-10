// Day 15 of DSA in JavaScript with programming paglu 🎀

// HashMap (JS Objects) – Key-Value Storage & Frequency Counter

//  What You’ll Learn:
// What is a HashMap?
// How to use JavaScript Objects like a pro
// Store & access key-value pairs
// Build a frequency counter (🔥 common interview pattern)


// What is a HashMap?
// A HashMap is a data structure that stores data in key-value pairs, like this:

const map = {
    "name": "Shiva",
    "age": 21
};

console.log(map["name"]); // "Shiva"

// JS Object Operations
// | Operation        | Syntax                                    | Time |
// | ---------------- | ----------------------------------------- | ---- |
// | Add key-value    | `map["a"] = 1;`                           | O(1) |
// | Access value     | `map["a"]`                                | O(1) |
// | Delete key       | `delete map["a"];`                        | O(1) |
// | Check key exists | `"a" in map` or `map.hasOwnProperty("a")` | O(1) |

// Frequency Counter Pattern
// A frequency counter helps count how many times an item appears — very useful for:

// Counting characters in a string

// Counting numbers in an array

// Checking anagrams, duplicates, etc.


// Count letters in a string
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(charFrequency("paglu"));
// { p: 1, a: 1, g: 1, l: 1, u: 1 }


// Count numbers in an array
function countNumbers(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

console.log(countNumbers([1, 2, 2, 3, 1, 4]));
// { 1: 2, 2: 2, 3: 1, 4: 1 }


// Check if two strings are anagrams
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq = {};

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

