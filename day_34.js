// Day 34 of DSA in JavaScript with programming paglu 🎀


// I covered:
// ✅ Recursion

// ✅ Sorting & Searching

// ✅ Sliding Window + 2 Pointer

// ✅ Greedy Algorithms

// ✅ Backtracking (Permutations, Combinations, N-Queens)

// 1: Subsets (Power Set)
function subsets(nums) {
    const res = [];

    function backtrack(start, path) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return res;
}

console.log(subsets([1, 2, 3]));


// 2: Coin Change (Greedy + DP)

function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));


// 3: First and Last Occurrence (Binary Search)

function findFirstLast(nums, target) {
    const result = [-1, -1];

    function search(left) {
        let l = 0, r = nums.length - 1;
        let res = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) {
                res = mid;
                if (left) r = mid - 1;
                else l = mid + 1;
            } else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }

        return res;
    }

    result[0] = search(true);
    result[1] = search(false);
    return result;
}

console.log(findFirstLast([5,7,7,8,8,10], 8));


//  4: N-Queens – Count Valid Boards

function totalNQueens(n) {
    let count = 0;
    const board = Array(n).fill(0).map(() => Array(n).fill('.'));

    function isSafe(r, c) {
        for (let i = 0; i < r; i++) {
            if (board[i][c] === 'Q') return false;
            if (c - (r - i) >= 0 && board[i][c - (r - i)] === 'Q') return false;
            if (c + (r - i) < n && board[i][c + (r - i)] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return count;
}

console.log(totalNQueens(4)); // Output: 2


// 5: Max Subarray Sum (Kadane’s Algorithm – Sliding Window style)

function maxSubArray(nums) {
    let maxSum = nums[0];
    let current = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        maxSum = Math.max(maxSum, current);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
