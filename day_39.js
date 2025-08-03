// Day 39 of DSA in JavaScript with programming paglu 🎀

// Tree Problems

// 1. Height of a Binary Tree
// Definition: Height = number of edges in the longest path from root to a leaf.

function treeHeight(root) {
    if (!root) return 0;

    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}


// 2. Count Total Nodes
function countNodes(root) {
    if (!root) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
}

// 3. Count Leaf Nodes
function countLeafNodes(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// 4. Sum of All Nodes
function sumOfNodes(root) {
    if (!root) return 0;

    return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// 5. Check if Tree is Balanced
// A balanced binary tree is one where:

// For every node, the height difference between left & right is at most 1.

function isBalanced(root) {
    function check(node) {
        if (!node) return [true, 0];

        const [leftBalanced, leftHeight] = check(node.left);
        const [rightBalanced, rightHeight] = check(node.right);

        const balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
        const height = 1 + Math.max(leftHeight, rightHeight);

        return [balanced, height];
    }

    return check(root)[0];
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);