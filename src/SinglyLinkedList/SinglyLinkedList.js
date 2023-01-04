import Node from "./Node";

export default class SinglyLinkedList {
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value)
    {
        let node = new Node(value);
        if (this.isEmpty()) {
            return this.addFirstNode(node);
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    pop()
    {
        let current = this.head;
        let newTail = null;
        while (current) {
            newTail = current;
            current = newTail.next;
        }
        newTail.next = null;
        this.length--;
        return current;
    }

    shift()
    {
        let currentHead = this.head;
        this.head = currentHead.next;
        currentHead.next = null;
        this.length--;
        return currentHead;
        
    }

    unshift(value)
    {
        let newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this.head;
    }

    get(index)
    {
        if(index < 0) {
            return null;
        }

        if (index >= this.length) {
            return null;
        }

        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    set(index, value)
    {
        let node = this.get(index);
        if (!node) {
            return false;
        }
        node.value = value;
        return true;
    }

    insert(index, value)
    {
        if(index < 0) {
            return false;
        }

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }
        
        let newNode = new Node(value);
        let precedentNode = this.head;
        let subsequentNode = precedentNode.next;
        for (let i = 1; i < index; i++) {
            precedentNode = subsequentNode;
            subsequentNode = precedentNode.next;
        }
        this.precedentNode.next = newNode;
        newNode.next = subsequentNode;

        return true;
    }

    remove(index)
    {
        if(index < 0) {
            return false;
        }

        if (index >= this.length) {
            return false;
        }
        
        if (index === 0) {
            this.shift();
            return true;
        }

        if(index === this.length - 1) {
            this.pop();
            return true;
        }

        let precedentNode = this.get(index - 1);
        precedentNode.next = precedentNode.next.next;
        this.length--;
        return true;
    }

    reverse()
    {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let previousNode, nextNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
    }

    addFirstNode(node)
    {
        this.head = node;
        this.tail = node;
        this.length++;
    }

    isEmpty()
    {
        return this.head === null;
    }
}