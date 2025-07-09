// Day 14 of DSA in JavaScript with programming paglu 🎀

// Weekly Practice – 5 Problems (Stack + Queue + Linked List)

// | Topic       | Concepts Covered                                       |
// | ----------- | ------------------------------------------------------ |
// | Stack       | push, pop, peek, isEmpty, min stack, valid parens      |
// | Queue       | enqueue, dequeue, peek, circular queue, 2-stack queue  |
// | Linked List | Node, next pointer, insertAtHead, insertAtTail, delete |

// 1. Reverse a Stack using Recursion

function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
        return;
    }
    const top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top);
}

function reverseStack(stack) {
    if (stack.length === 0) return;

    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
}

// Test
const stack = [1, 2, 3];
reverseStack(stack);
console.log(stack); // [3, 2, 1]

// ✅ Time: O(n²) due to nested recursive calls

// 2. Implement Queue using Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (!this.head) return null;
        const val = this.head.value;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return val;
    }

    peek() {
        return this.head ? this.head.value : null;
    }
}

// Test
const q = new LLQueue();
q.enqueue(10);
q.enqueue(20);
console.log(q.dequeue()); // 10
console.log(q.peek());    // 20

// ✅ Time: O(1) enqueue and dequeue


// 3. Search in a Linked List

function search(head, target) {
    let current = head;
    while (current) {
        if (current.value === target) return true;
        current = current.next;
    }
    return false;
}

// ✅ Time: O(n)

// 4. Remove All Occurrences from Linked List

function removeAll(head, target) {
    while (head && head.value === target) {
        head = head.next;
    }

    let current = head;
    while (current && current.next) {
        if (current.next.value === target) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// ✅ Time: O(n)

//  5. Check if a Queue is Palindrome

function isQueuePalindrome(queue) {
    const arr = [...queue];
    const reversed = [...arr].reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversed[i]) return false;
    }
    return true;
}

// Test
const q2 = [1, 2, 3, 2, 1];
console.log(isQueuePalindrome(q2)); // true

// ✅ Time: O(n) | Space: O(n)
