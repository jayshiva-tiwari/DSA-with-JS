// Day 37 of DSA in JavaScript with programming paglu 🎀

// What is Tree Traversal?
// Traversal means visiting every node in a tree exactly once, in a specific order.
// In DFS traversal, we go deep into a subtree before backtracking.

// Depth-First Search

// | Traversal     | Order               | Use Case Example                       |
// | ------------- | ------------------- | -------------------------------------- |
// | **Inorder**   | Left → Root → Right | BST (gives sorted order)               |
// | **Preorder**  | Root → Left → Right | Copying tree structure                 |
// | **Postorder** | Left → Right → Root | Deleting tree / evaluating expressions |

// example 
//      1
//    /   \
//   2     3
//  / \
// 4   5

// Expected DFS Results:
// Inorder: 4 2 5 1 3
// Preorder: 1 2 4 5 3
// Postorder: 4 5 2 3 1

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Create the tree manually
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Inorder: Left → Root → Right
function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

// Preorder: Root → Left → Right
function preorder(root) {
    if (root === null) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

// Postorder: Left → Right → Root
function postorder(root) {
    if (root === null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
