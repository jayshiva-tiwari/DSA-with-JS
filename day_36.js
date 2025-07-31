// Day 36 of python DSA with programming paglu 🎀

// What is a Tree in DSA?
// A Tree is a non-linear hierarchical data structure made of nodes connected by edges.

// | Term        | Meaning                                     |
// | ----------- | ------------------------------------------- |
// | **Node**    | An element of the tree (holds data)         |
// | **Root**    | Topmost node of the tree                    |
// | **Edge**    | Connection between one node to another      |
// | **Child**   | Node connected below another node           |
// | **Parent**  | Node connected above another node           |
// | **Leaf**    | A node with no children                     |
// | **Subtree** | A tree formed by a node and its descendants |
// | **Depth**   | Distance from root to that node             |
// | **Height**  | Max depth among all nodes                   |


// What is a Binary Tree?
// A Binary Tree is a tree where each node has at most 2 children:
// left child
// right child


// Node class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Creating nodes manually
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Tree Structure:
//         1
//       /   \
//      2     3
//     / \     
//    4   5



//  Traversal Types (Preview for upcoming days)
// Preorder: Root → Left → Right

// Inorder: Left → Root → Right

// Postorder: Left → Right → Root

// Level Order (BFS)

