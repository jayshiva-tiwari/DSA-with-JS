// Day 32 of DSA in Javascript with programming paglu 🎀


// What You’ll Learn Today:
// What is Backtracking

// Difference from Recursion

// Solve 2 classic backtracking problems:

    // N-Queens Problem

    // Subsets (Power Set)

//  What is Backtracking?

// Backtracking is a problem-solving technique that tries all possible options and undoes a choice ("backtracks") if it doesn't lead to a solution.
// Think of it like exploring all paths in a maze, backing up when you hit a wall.

// It is typically used for:

//     Combinatorics (Subsets, Permutations)

//     Puzzles (Sudoku, N-Queens)

//     Constraint-based problems


// 1: N-Queens (4x4)
// Place N queens on an N×N chessboard such that no two queens attack each other.
function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const res = [];

    function isSafe(row, col) {
        // check column
        for (let i = 0; i < row; i++)
            if (board[i][col] === 'Q') return false;

        // check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] === 'Q') return false;

        // check upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
            if (board[i][j] === 'Q') return false;

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            res.push(board.map(r => r.join('')));
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
    return res;
}

console.log("Solutions:");
console.log(solveNQueens(4));


//  2: Subsets (Power Set)
// Given an array nums, return all possible subsets (the power set).

function subsets(nums) {
    const res = [];

    function backtrack(start, path) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop(); // backtrack
        }
    }

    backtrack(0, []);
    return res;
}

console.log(subsets([1, 2, 3]));

