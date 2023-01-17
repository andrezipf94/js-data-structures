import Node from "./Node";

export default class DoublyLinkedList {
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (this.isEmpty()) {
            return this.addFirstNode(value);
        }

        let node = new Node(value);
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        if (this.length === 1) {
            let currentHead = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return currentHead;
        }

        let tail = this.tail;
        let tailsPrevious = tail.previous;
        tailsPrevious.next = null;
        tail.next = null;
        tail.previous = null;
        this.tail = tailsPrevious;
        this.length--;
        return tail;
    }

    shift() {
        if (this.isEmpty()) {
            return undefined;
        }
        let currentHead = this.head;
        let newHead = currentHead.next;
        if (newHead) {
            newHead.previous = null;
        }
        this.head = newHead;
        this.length--;
        currentHead.next = null;
        return currentHead;
    }

    unshift(value) {
        if (this.isEmpty()) {
            return this.addFirstNode(value);
        }
        let newHead = new Node(value);
        let currentHead = this.head;
        newHead.next = currentHead;
        currentHead.previous = newHead;
        this.head = newHead;
        this.length++;
    }

    get(index) {
        let medium = Math.floor(this.length / 2);
        if (index < medium) {
            return this.getFromHead(index);
        }
        return this.getFromTail(index);
    }

    getFromHead(index) {
        if (this.isEmpty() || index < 0 || index >= this.length) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    getFromTail(index) {
        if (this.isEmpty() || index < 0 || index >= this.length) {
            return undefined;
        }
        let current = this.tail;
        for (let i = (this.length - 1); i > index; i--) {
            current = current.previous;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if (!node) {
            return false;
        }
        node.value = value;
        return true;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }

        let nodeCurrentlyAtIndex = this.get(index);
        if (!nodeCurrentlyAtIndex) {
            return false;
        }
        let newNode = new Node(value);
        newNode.next = nodeCurrentlyAtIndex;
        newNode.previous = nodeCurrentlyAtIndex.previous;
        newNode.previous.next = newNode;
        nodeCurrentlyAtIndex.previous = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        let nodeToBeRemoved = this.get(index);
        if (!nodeToBeRemoved) {
            return undefined;
        }
        nodeToBeRemoved.previous.next = nodeToBeRemoved.next;
        nodeToBeRemoved.next.previous = nodeToBeRemoved.previous;
        nodeToBeRemoved.previous = null;
        nodeToBeRemoved.next = null;
        this.length--;
        return nodeToBeRemoved;
    }

    isEmpty() {
        return this.length === 0;
    }

    addFirstNode(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length++;
    }
}