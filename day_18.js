// Day 18 of DSA in JavaScript with programming paglu 🎀

// Practice day

//  Problem 1: Find the First Repeating Element

function firstRepeating(arr) {
    const seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return null;
}

console.log(firstRepeating([10, 5, 3, 4, 3, 5, 6])); // Output: 5


// Problem 2: Are Two Strings Isomorphic?
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const map1 = {}, map2 = {};

    for (let i = 0; i < s.length; i++) {
        const a = s[i], b = t[i];

        if ((map1[a] && map1[a] !== b) || (map2[b] && map2[b] !== a)) {
            return false;
        }

        map1[a] = b;
        map2[b] = a;
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false

// Problem 3: Find All Duplicates in an Array

function findDuplicates(arr) {
    const seen = new Set();
    const result = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            result.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...result];
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]


// Problem 4: Count Pairs with Sum = Target

function countPairs(arr, target) {
    const freq = {};
    let count = 0;

    for (let num of arr) {
        const complement = target - num;
        if (freq[complement]) {
            count += freq[complement];
        }

        freq[num] = (freq[num] || 0) + 1;
    }

    return count;
}

console.log(countPairs([1, 5, 7, -1, 5], 6)); // Output: 3

// Problem 5: Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3



