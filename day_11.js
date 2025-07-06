// Day 11 of DSA in JavaScript with programming paglu 🎀

// Queue Questions – Circular Queue & Queue Using Stacks

// 1. Implement a Circular Queue

// Basic Operations:
// enqueue(x) → Add element

// dequeue() → Remove front

// front() → Peek first

// rear() → Peek last

// isFull() → Check if full

// isEmpty() → Check if empty

class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        const removed = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = this.rear = -1; // Queue becomes empty
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return removed;
    }

    getFront() {
        return this.isEmpty() ? null : this.queue[this.front];
    }

    getRear() {
        return this.isEmpty() ? null : this.queue[this.rear];
    }
}

// Example
const cq = new CircularQueue(3);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.isFull()); // true
console.log(cq.dequeue()); // 1
cq.enqueue(4); // adds at front space
console.log(cq.getFront()); // 2
console.log(cq.getRear()); // 4

// 2.  Implement a Queue using Two Stacks (🔥 Interview Favorite)

class QueueUsingStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(x) {
        this.inStack.push(x);
    }

    dequeue() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

// Example
const q = new QueueUsingStacks();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek()); // 10
console.log(q.dequeue()); // 10
console.log(q.peek()); // 20
