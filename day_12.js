// Day 12 of DSA in JavaScript with programming paglu 🎀

//  Goals for Today:
// Understand what a linked list is
// Learn how to create a Node
// Build a basic linked list with manual connections
// Practice traversal using .next pointers

// What is a Linked List?
// A Linked List is a linear data structure where elements (called nodes) are not stored at contiguous memory locations like arrays.
// Each node points to the next node, forming a chain.

// Create a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// Manually Create a Linked List
// Create nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Link nodes
node1.next = node2;
node2.next = node3;

// Head points to first node
let head = node1;

// Traverse a Linked List
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printList(head); // 10, 20, 30
