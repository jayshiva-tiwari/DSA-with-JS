// Day 46 of DSA in javascript with programming paglu🎀

// Theory Recap
// Purpose: Find the shortest distance from a source node to all other nodes.

// Graph Type: Weighted, directed or undirected, no negative weights.

// Key Idea: Always pick the next closest unvisited node, then update distances.

// Dijkstra’s Steps (High-Level)
// 1. Set distance to start node = 0, all others = Infinity.

// 2. Keep a priority queue (or simple array) of nodes to visit.

// 3. Pick the smallest distance node not yet visited.

// 4. Update distances to its neighbors if shorter path found.

// 5. Repeat until all nodes are visited.

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();
    const previous = {};
    const visited = new Set();

    // Init distances
    for (let node in graph) {
        distances[node] = node === start ? 0 : Infinity;
        previous[node] = null;
    }

    pq.enqueue(start, 0);

    while (pq.values.length) {
        let { val: current } = pq.dequeue();

        if (visited.has(current)) continue;
        visited.add(current);

        for (let neighbor in graph[current]) {
            let distance = graph[current][neighbor];
            let totalDistance = distances[current] + distance;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                previous[neighbor] = current;
                pq.enqueue(neighbor, totalDistance);
            }
        }
    }

    return { distances, previous };
}

// Example Graph
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, E: 3 },
    C: { A: 2, D: 2, F: 4 },
    D: { C: 2, E: 3, F: 1 },
    E: { B: 3, D: 3, F: 1 },
    F: { C: 4, D: 1, E: 1 }
};

console.log(dijkstra(graph, "A"));


// distances → shortest distance from start node.
// previous → to reconstruct shortest path.

