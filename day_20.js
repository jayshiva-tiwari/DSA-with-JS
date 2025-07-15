// Day 20 of DSA in Javascript with progromming paglu 🎀

// Sliding Window Technique
// Max Sum Subarray | Longest Substring | Min Window Length

//  What You'll Learn:
// What is Sliding Window?

// When to use it (instead of brute-force)

// Practice with 3 classic problems


//  What is Sliding Window?
// Instead of recalculating results from scratch, you:

// "Slide" a window (range) across your array or string

// Add/remove elements efficiently as the window moves

// Keep track of sum, length, characters, etc.



// 1: Max Sum of Subarray of Size K

function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9

// ✅ Time: O(n)
// ✅ Space: O(1)
// ✅ Why sliding window? We update sum by removing prev & adding new


// 2: Longest Substring Without Repeating Characters

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

// ✅ Time: O(n)
// ✅ Space: O(n)
// ✅ Sliding window moves left/right as we remove duplicates


// 3: Smallest Subarray with Sum ≥ Target

function minSubArrayLen(target, arr) {
    let minLen = Infinity;
    let left = 0, sum = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

// ✅ Time: O(n)
// ✅ Space: O(1)
// ✅ Window shrinks from left when sum ≥ target

