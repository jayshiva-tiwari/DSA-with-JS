// Day 24 of DSA in JavaScript with programming paglu 🎀

// 1. Bubble Sort (Compare & Swap Adjacent)
// Keep pushing the largest element to the right in each pass.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 3]));
// Output: [1, 2, 3, 5, 9]


// 2. Selection Sort (Find Minimum & Swap)
// 📌 Select the smallest and put it in correct position.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // swap smallest with arr[i]
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 2, 9, 1, 3]));
// Output: [1, 2, 3, 5, 9]
