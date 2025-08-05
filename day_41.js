// Day 41 of DSA in JavaScript with programming paglu 🎀

// BST Problems: Floor/Ceil, Kth Smallest

// Topics to Learn & Practice
// We focus on Binary Search Tree (BST) problem solving today:

// Floor in BST

// Ceil in BST

// Kth Smallest Element in BST

// 1. Floor in BST
// The floor of a key x in BST is the largest value in BST ≤ x.

// ✅ Approach:
// Traverse BST.

// If node’s value == x → return it.

// If node’s value > x → go left.

// If node’s value < x → this might be floor → go right and store this as potential answer.


function floorInBST(root, key) {
    let floor = -1;
    while (root) {
        if (root.val === key) return root.val;
        if (root.val > key) root = root.left;
        else {
            floor = root.val;
            root = root.right;
        }
    }
    return floor;
}


// 2. Ceil in BST
// The ceil of a key x in BST is the smallest value in BST ≥ x.

// ✅ Approach:
// Similar to floor, but reverse direction:

// If node’s value == x → return it.

// If node’s value < x → go right.

// If node’s value > x → potential ceil → go left.

function ceilInBST(root, key) {
    let ceil = -1;
    while (root) {
        if (root.val === key) return root.val;
        if (root.val < key) root = root.right;
        else {
            ceil = root.val;
            root = root.left;
        }
    }
    return ceil;
}


// 3. Kth Smallest Element in BST
// Use inorder traversal (L -> Root -> R) → gives sorted order.

// ✅ Approach:
// Traverse in-order.

// Keep a counter. When counter = k, return node value.

function kthSmallest(root, k) {
    let count = 0;
    let result = -1;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        inorder(node.right);
    }

    inorder(root);
    return result;
}

// Example BST for testing:
//      10
//     /  \
//    5    15
//   / \   / \
//  2   7 12 20
