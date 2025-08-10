// Day 47 of DSA in javascript with programming paglu🎀

// Theory :
// Topological Sort → Linear ordering of vertices such that for every directed edge u → v, vertex u comes before v in the ordering.

// Works only on:

    // Directed Acyclic Graphs (DAG) — if there’s a cycle, no valid ordering exists.

// Real-life Uses:

    // Course prerequisites

    // Build systems (compiling files in correct order)

    // Task scheduling


// Two Main Approaches
   // Kahn’s Algorithm (BFS)
   // DFS-based Topological Sort

// Kahn’s Algorithm Implementation

function findOrder(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);

    // Build adjacency list and indegree array
    for (let [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    const order = [];
    while (queue.length) {
        let node = queue.shift();
        order.push(node);

        for (let neighbor of adj[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return order.length === numCourses ? order : [];
}

// Example: 4 courses, with prerequisites
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
// Output: [0,1,2,3] or [0,2,1,3]

// How This Works
// Indegree = 0 means no dependencies → can be taken first.

// Remove it from graph, reduce indegree of connected courses.

// Repeat until no courses left.

// If we visited all nodes → valid order exists; else → cycle detected.