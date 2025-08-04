// Day 40 of DSA in JavaScript with programming paglu 🎀

// What is a BST?
// A Binary Search Tree is a binary tree with the following rules:

// Left subtree contains values < root

// Right subtree contains values > root

// No duplicate values allowed (typically)


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// 1. Insert into BST

function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

// 2. Search in BST

function searchBST(root, target) {
    if (!root || root.val === target) return root;

    if (target < root.val) {
        return searchBST(root.left, target);
    } else {
        return searchBST(root.right, target);
    }
}


// 3. Delete Node in BST
// Trickiest part – we handle 3 cases:

// Node is a leaf → just delete it

// Node has 1 child → return child

// Node has 2 children → find inorder successor (smallest in right subtree)

function deleteNode(root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Case 1 & 2
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 3 – Find inorder successor
        let successor = root.right;
        while (successor.left) successor = successor.left;

        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}

// 4. Inorder Traversal of BST (Sorted Order)
function inorder(root) {
    if (!root) return;

    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

