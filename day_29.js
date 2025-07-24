// Day 29 of DSA in JavaScript with programming paglu 🎀

// Techniques:
// ✅ 2 Pointer – Works great on sorted arrays

// ✅ Sliding Window – Perfect for subarray or substring problems

// 1. Two Sum – Sorted Input (2-pointer)

// Problem: Find two numbers such that nums[i] + nums[j] === target.
// Input: Sorted array
// Output: Indices (1-based)

function twoSumSorted(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }

    return [];
}

console.log(twoSumSorted([2, 7, 11, 15], 9));  // Output: [1, 2]


//  2. Remove Duplicates from Sorted Array (2-pointer)

function removeDuplicates(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1; // length of unique array
}

console.log(removeDuplicates([1, 1, 2, 2, 3])); // Output: 3


//  3. Max Sum Subarray of Size K (Sliding Window – Fixed size)

function maxSumSubarray(arr, k) {
    let maxSum = 0, currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39


// 4. Longest Substring Without Repeating Characters (Sliding Window – Variable size)4. Longest Substring Without Repeating Characters (Sliding Window – Variable size)

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

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3


// 5. Container With Most Water (2-pointer, advanced)

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, width * h);

        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
