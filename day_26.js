// Day 26 of DSA in JavaScript with programming paglu 🎀

// What is Quick Sort?
   // Like Merge Sort, it uses Divide & Conquer, but it’s usually faster in practice.

   // It picks a pivot, partitions the array around it:

        // Left: values < pivot

        // Right: values > pivot

// Then it recursively sorts the left and right parts.


// How it Works (Steps):
// Choose a pivot (commonly the last element).

// Partition the array so all elements smaller than pivot go left, larger go right.

// Recursively apply the same logic to sub-arrays.

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);  // Left side
        quickSort(arr, pivotIndex + 1, right); // Right side
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];  // last element as pivot
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // swap
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];  // place pivot at correct spot
    return i + 1;
}

// Try it out!
console.log(quickSort([10, 7, 8, 9, 1, 5]));  // Output: [1, 5, 7, 8, 9, 10]

