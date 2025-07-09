// Day 13 of DSA in JavaScript with programming paglu 🎀

// Linked List Insert & Delete

// Goals for Today:
// Build a SinglyLinkedList class
// Implement:
// insertAtHead(value)
// insertAtTail(value)
// deleteValue(value)
// printList()


// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// Linked List Class Skeleton
class LinkedList {
    constructor() {
        this.head = null;
    }
}

// Insert at Head

// Insert at Tail

//  Delete a Node by Value

// Print All Nodes
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    deleteValue(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " → ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

// ✅ Test the list
const ll = new LinkedList();
ll.insertAtHead(30);
ll.insertAtHead(20);
ll.insertAtTail(40);
ll.insertAtTail(50);
ll.printList(); // 20 → 30 → 40 → 50 → null
ll.deleteValue(30);
ll.printList(); // 20 → 40 → 50 → null