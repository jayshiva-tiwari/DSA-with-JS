// Day 38 of DSA in JavaScript with programming paglu 🎀

// Tree BFS (Breadth-First Search)

// What is BFS in Trees?
// Breadth-First Search (BFS) visits all nodes level-by-level from left to right.

//      1
//    /   \
//   2     3
//  / \
// 4   5

// Then the level order traversal is:
// :- [1, 2, 3, 4, 5]

//  BFS = Queue-Based Traversal
// BFS uses a queue (FIFO) to keep track of nodes to visit next.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Same tree:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Level Order (BFS)
function levelOrder(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}


function levelOrderArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}

console.log(levelOrderArray(root)); // [[1], [2, 3], [4, 5]]