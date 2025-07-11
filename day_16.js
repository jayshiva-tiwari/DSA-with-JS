// Day 16 of DSA in JavaScript with programming paglu 🎀

// HashMap Questions – First Unique Char, Word Frequency, Anagram Groups

// Your Goals Today:
// Practice solving problems using frequency maps
// Master O(n) time lookups using JS Objects
// Think like an interviewer


// First Unique Character in a String
function firstUniqueChar(s) {
    const freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
}

console.log(firstUniqueChar("leetcode"));   // 0
console.log(firstUniqueChar("aabb"));       // -1

// Word Frequency Counter
function wordFrequency(sentence) {
    const words = sentence.toLowerCase().split(" ");
    const freq = {};

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}

console.log(wordFrequency("hello world hello Shiva"));
// { hello: 2, world: 1, shiva: 1 }

// Group Anagrams (🔥 Google Q)
function groupAnagrams(words) {
    const map = {};

    for (let word of words) {
        const sorted = word.split("").sort().join(""); // key
        if (!map[sorted]) map[sorted] = [];
        map[sorted].push(word);
    }

    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

