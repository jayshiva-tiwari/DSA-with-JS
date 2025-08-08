// Day 43 of DSA in JavaScript with programming paglu 🎀

// What’s a Graph?
// A Graph is a collection of:

// Nodes (also called vertices)

// Edges (connections between nodes)

// Used to model: networks, maps, social connections, recommendations, etc.

// Real-World Examples:
// Google Maps 🗺️ → cities as nodes, roads as edges

// Social Media 📱 → users as nodes, follow/friend as edges

// Netflix/YouTube 📺 → video recommendations via graphs

// 1.  Adjacency List
// Each node points to a list of its neighbors.
// Space Efficient for sparse graphs.

// Graph: 0 → [1, 2], 1 → [2], 2 → [0, 3], 3 → [3]
const adjList = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
};


// 2. Adjacency Matrix
// 2D matrix, where matrix[i][j] = 1 if edge exists from node i to j.

// Graph with 4 nodes
const adjMatrix = [
    [0, 1, 1, 0], // Node 0 → 1, 2
    [0, 0, 1, 0], // Node 1 → 2
    [1, 0, 0, 1], // Node 2 → 0, 3
    [0, 0, 0, 1], // Node 3 → 3
];


// | Type                      | Description                          |
// | ------------------------- | ------------------------------------ |
// | Directed vs Undirected    | One-way or two-way edges             |
// | Weighted vs Unweighted    | Edge has weight or just a connection |
// | Cyclic vs Acyclic         | Contains loops or not                |
// | Connected vs Disconnected | All nodes reachable or not           |

// Let’s Do It Practically (JavaScript):
// ➤ Adjacency List - Build and Print:


class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2); // directed
        // this.adjList[v2].push(v1); // uncomment for undirected
    }

    printGraph() {
        for (let vertex in this.adjList) {
            console.log(`${vertex} → ${this.adjList[vertex].join(', ')}`);
        }
    }
}

const g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.printGraph();


// What is a Graph?
// A graph is a non-linear data structure consisting of:

// Nodes (Vertices) — entities

// Edges — connections/relationships between nodes

// It models real-world relationships like:

// People on social media

// Cities on a map

// Computer networks

// Webpages (links between them)

//  Types of Graphs
// 🔁 A. Directed vs Undirected
// Directed: edge has a direction (e.g. Twitter follow)

// Undirected: edge is bidirectional (e.g. Facebook friend)

// ⚖️ B. Weighted vs Unweighted
// Weighted: edges have cost/weight (e.g. map distance)

// Unweighted: all edges equal (e.g. social links)

// ♻️ C. Cyclic vs Acyclic
// Cyclic: has at least one cycle (A → B → C → A)

// Acyclic: no cycles (e.g. trees, DAG)

// 🔗 D. Connected vs Disconnected
// Connected: path exists between every node

// Disconnected: some nodes isolated


