// Day 33 of DSA in JavaScript with programming paglu 🎀

// What I’ll Learn:
// Permutations – All possible arrangements of elements
// Combinations – Selecting k elements from n without duplicates

// Generate All Permutations
// Problem:
// Given an array nums, return all possible permutations (order matters, no repetition).

function permute(nums) {
    const res = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();       // backtrack
            used[i] = false;  // unmark
        }
    }

    backtrack([], []);
    return res;
}

console.log(permute([1, 2, 3]));


// Combinations (n choose k)
// Problem:
// Given n and k, return all combinations of k numbers from 1 to n.

function combine(n, k) {
    const res = [];

    function backtrack(start, path) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();  // backtrack
        }
    }

    backtrack(1, []);
    return res;
}

console.log(combine(4, 2));
