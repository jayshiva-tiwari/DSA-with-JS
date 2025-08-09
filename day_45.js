// Day 45 of DSA in javascript with programming paglu 🎀

// Graph Problems

//  1. Connected Components
// A connected component is a group of nodes where there's a path between every pair of nodes in the group.

// const graph = {
//     0: [1],
//     1: [0],
//     2: [3],
//     3: [2],
//     4: []
// };

// This graph has 3 components: [0,1], [2,3], [4]

// Count Connected Components

function countComponents(graph) {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(graph, node, visited);
            count++;
        }
    }

    return count;
}

function dfs(graph, node, visited) {
    visited.add(node);
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// const graph = {
//     0: ['1'],
//     1: ['0'],
//     2: ['3'],
//     3: ['2'],
//     4: []
// };

console.log(countComponents(graph)); // ➤ 3


// 2. Cycle Detection (Undirected Graph)
// A cycle exists if you revisit a node through a different path than the one you came from.

// DFS + Parent Tracking
function hasCycle(graph) {
    const visited = new Set();

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(graph, node, visited, null)) {
                return true;
            }
        }
    }

    return false;
}

function dfs(graph, node, visited, parent) {
    visited.add(node);

    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (dfs(graph, neighbor, visited, node)) return true;
        } else if (neighbor !== parent) {
            return true; // Cycle found!
        }
    }

    return false;
}

const graph = {
    0: ['1'],
    1: ['0', '2'],
    2: ['1', '3'],
    3: ['2', '0'] // Forms a cycle
};

console.log(hasCycle(graph)); // ➤ true


// | Problem              | Technique    | Notes                          |
// | -------------------- | ------------ | ------------------------------ |
// | Connected Components | DFS/BFS      | Count how many DFS runs needed |
// | Cycle Detection      | DFS + Parent | Only in undirected graphs      |


