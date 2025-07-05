// Day 10 of DSA in JavaScript with programming paglu 🎀

// Queue – Concept + Enqueue, Dequeue, Peek (in JavaScript)

// Today’s Goals:
// Understand what a Queue is
// Learn to implement it using JavaScript
// Practice enqueue(), dequeue(), peek(), isEmpty()
// Compare it with a Stack (LIFO vs FIFO)

// What is a Queue?
// A Queue is a linear data structure that follows FIFO: First In, First Out

// | Operation    | Description                         |
// | ------------ | ----------------------------------- |
// | `enqueue(x)` | Add element `x` to the end          |
// | `dequeue()`  | Remove the element from the front   |
// | `peek()`     | View front element without removing |
// | `isEmpty()`  | Check if the queue is empty         |


// create queue
const queue = [];

// Enqueue (Add to end)
queue.push(10);
queue.push(20);
console.log(queue); // [10, 20]

// Dequeue (Remove from front)
queue.shift(); // removes 10
console.log(queue); 

// Peek (Front of the queue)
console.log(queue[0]); // 20

// isEmpty
console.log(queue.length === 0); // true
console.log(queue.length === 0); // false

// practice problems
// Create a queue and enqueue 3 values
const queues = [];
queues.push(5);
queues.push(10);
queues.push(15);
console.log(queues); // [5, 10, 15]

// Dequeue 1 element and show queue
queues.shift();
console.log(queues); // [10, 15]

// Show front element using peek
console.log(queues[0]); // 10

// Check if queue is empty
console.log(queues.length === 0); // false

// | Feature     | Stack (LIFO)       | Queue (FIFO)       |
// | ----------- | ------------------ | ------------------ |
// | Remove from | Top (end)          | Front (start)      |
// | Add to      | Top (end)          | Rear (end)         |
// | Example     | Undo, browser back | Print queue, tasks |
