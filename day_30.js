// Day 30 of DSA in JavaScript with programming paglu 🎀

// Weakly recap the topics i covered.

// Concepts:
// ✅ Recursive thinking

// ✅ Backtracking templates

// ✅ Subsets & permutations generation

// ✅ Two-pointer logic

// ✅ Sliding window (fixed & variable size)


// 1: Two Sum (HashMap – Week 3)

function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}


// 2: Reverse String (Recursion – Week 4)

function reverseString(str) {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}


// 3: Valid Parentheses (Stack – Week 2)

function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let ch of s) {
        if (ch in map) {
            if (stack.pop() !== map[ch]) return false;
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}


// 4: First Unique Character (HashMap – Week 3)

function firstUniqueChar(s) {
    const count = {};
    for (let ch of s) count[ch] = (count[ch] || 0) + 1;
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    return -1;
}


// 5: Remove Duplicates (Set – Week 3)

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 6: Max Sum Subarray (Sliding Window – Week 3)

function maxSubArraySum(arr, k) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}


// 7: Insert at Head (Linked List – Week 2)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function insertHead(head, val) {
    const newNode = new Node(val);
    newNode.next = head;
    return newNode;
}


// 8: Binary Search (Searching – Week 4)

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


// 9: Merge Sort (Sorting – Week 4)

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


// 10: Count Occurrences of a Number (Recursive)

function countOccurrences(arr, num, i = 0) {
    if (i === arr.length) return 0;
    return (arr[i] === num ? 1 : 0) + countOccurrences(arr, num, i + 1);
}


