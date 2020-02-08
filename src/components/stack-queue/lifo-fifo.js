class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0
    }
    push(data) {
        let node = new Node(data)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        this.size++
    }
    pop() {
        if (!this.first) return null;
        let node = this.first
        if (node.next) {
            node = node.next
            this.first = node
        } else {
            this.first = null
            this.last = null
        }
        this.size--
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    length() {
        return this.data.length;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0
    }
    enqueue(data) {
        let node = new Node(data)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
    }

    dequeue() {
        if (!this.first) return null;
        let node = this.first
        if (node.next) {
            node = node.next
            this.first = node
        } else {
            this.first = null
            this.last = null
        }
        this.size--
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    length() {
        return this.data.length;
    }
}
export { Stack, Queue };