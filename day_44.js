// Day 44 of DSA in JavaScript with programming paglu 🎀

// What is Graph Traversal?
// Traversal = Visiting all nodes in a graph.

// | Traversal                      | Uses Stack/Queue         | Approach               |
// | ------------------------------ | ------------------------ | ---------------------- |
// | **DFS** (Depth First Search)   | Stack (can be recursive) | Go as deep as possible |
// | **BFS** (Breadth First Search) | Queue                    | Go level by level      |


// Graph Representation (Adjacency List)
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

//  DFS (Depth First Search)
// Recursive DFS
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;

    console.log(node); // Process node
    visited.add(node);

    for (let neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
}

dfs(graph, 'A'); // Output: A B D E F C

// Iterative DFS using Stack
function dfsIterative(graph, start) {
    let stack = [start];
    let visited = new Set();

    while (stack.length > 0) {
        let node = stack.pop();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            for (let neighbor of graph[node].reverse()) {
                stack.push(neighbor);
            }
        }
    }
}

dfsIterative(graph, 'A'); // Output: A C F B E D

// BFS (Breadth First Search)
//  Using Queue
function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();

    while (queue.length > 0) {
        let node = queue.shift();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            for (let neighbor of graph[node]) {
                queue.push(neighbor);
            }
        }
    }
}

bfs(graph, 'A'); // Output: A B C D E F


// | Feature   | DFS                     | BFS            |
// | --------- | ----------------------- | -------------- |
// | Structure | Stack (or recursion)    | Queue          |
// | Goes      | Deep first              | Level by level |
// | Space     | Lower (in sparse)       | Can be high    |
// | Use case  | Path finding, Topo sort | Shortest path  |

