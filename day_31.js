// Day 31 of DSA in Javascript with programming paglu 🎀

// What You'll Learn:
// What is the Greedy approach
// Greedy vs Dynamic Programming
// Solve 2 classic problems using Greedy:
    // Activity Selection
    // Coin Change (Minimum Coins)


    // Greedy Algorithm: Basics
// Greedy algorithms build up a solution step by step, always choosing the most optimal choice at that moment, hoping it leads to a global optimum.
// Unlike DP (which explores all possibilities), greedy makes a locally optimal choice at each step.


// 1: Activity Selection
// Given start[] and end[] times of n activities, select the maximum number of activities that can be performed by a single person, assuming a person can only work on a single activity at a time.

// Greedy Strategy:
// Select the activity with the earliest finish time first.
// Then, pick the next activity whose start time is after or equal to the finish time of the last selected.

function activitySelection(start, end) {
    const n = start.length;
    const activities = [];

    for (let i = 0; i < n; i++) {
        activities.push({ start: start[i], end: end[i] });
    }

    // Sort by end time
    activities.sort((a, b) => a.end - b.end);

    let count = 1;
    let lastEnd = activities[0].end;

    for (let i = 1; i < n; i++) {
        if (activities[i].start >= lastEnd) {
            count++;
            lastEnd = activities[i].end;
        }
    }

    return count;
}

let start = [1, 3, 0, 5, 8, 5];
let end =   [2, 4, 6, 7, 9, 9];
console.log("Max Activities:", activitySelection(start, end)); // Output: 4


// 2: Coin Change (Min Coins)
// Problem:
// Given coin denominations and a total amount, find the minimum number of coins required to make the amount. You can use unlimited supply of each coin.

function minCoins(coins, amount) {
    coins.sort((a, b) => b - a); // Sort in descending
    let count = 0;
    let i = 0;

    while (amount > 0 && i < coins.length) {
        if (coins[i] <= amount) {
            let use = Math.floor(amount / coins[i]);
            count += use;
            amount -= use * coins[i];
        }
        i++;
    }

    return amount === 0 ? count : -1;
}

let coins = [1, 2, 5, 10];
let amount = 18;
console.log("Min Coins:", minCoins(coins, amount)); // Output: 4 (10 + 5 + 2 + 1)


