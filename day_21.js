// Day 21 of DSA in JavaScript with programming paglu 🎀

//  Weekly Review + 10 Mixed Questions

//  1  Count Frequency of Elements in an Array

function countFreq(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

console.log(countFreq([1, 2, 2, 3, 1]));
// { '1': 2, '2': 2, '3': 1 }


// 2 Remove Duplicates from Array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]


// 3 First Non-Repeating Character (HashMap)

function firstUniqueChar(str) {
    const freq = {};

    for (let char of str) freq[char] = (freq[char] || 0) + 1;

    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) return i;
    }

    return -1;
}

console.log(firstUniqueChar("leetcode")); // 0


//  4 Pair Sum (Sorted Array, 2-Pointer)

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

console.log(twoSumSorted([1, 2, 4, 6, 8], 10)); // [2, 8]


// 5 Reverse an Array (2-pointer)

function reverseArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]


// 6 Longest Substring Without Repeat (Sliding Window)

function longestUniqueSubstring(s) {
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

console.log(longestUniqueSubstring("abcabcbb")); // 3


//  7 Smallest Subarray with Sum ≥ Target (Sliding Window)

function minSubArrayLen(target, arr) {
    let minLen = Infinity;
    let left = 0, sum = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2


//  8 Group Anagrams (HashMap)

function groupAnagrams(words) {
    const map = {};

    for (let word of words) {
        const key = word.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(word);
    }

    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]


// 9 Check Palindrome (2-pointer)

function isPalindrome(str) {
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam")); // true


// 10 Move Zeros to End (Two Pointer)

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
