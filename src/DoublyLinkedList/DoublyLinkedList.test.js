import DoublyLinkedList from "./DoublyLinkedList";

describe('Doubly linked list', () => {
    it('should push values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            list.push(i);

            // Assert
            expect(list.head.value).toEqual(0);
            expect(list.tail.value).toEqual(i);
            expect(list.length).toEqual(i + 1);
            if (i === 0) {
                expect(list.tail.previous).toEqual(null);
                expect(list.tail.next).toEqual(null);
                expect(list.head.previous).toEqual(null);
                expect(list.head.next).toEqual(null);
                continue;
            }
            expect(list.tail.previous.next.value).toEqual(i);
            expect(list.tail.next).toEqual(null);
        }
    });

    it('should pop values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        console.log(list.head);

        for (let i = amountOfItems - 1; i >= 0; i--) {
            // Act
            let popped = list.pop();

            // Assert
            expect(popped.value).toEqual(i);
            expect(popped.next).toEqual(null);
            expect(popped.previous).toEqual(null);
            expect(list.length).toEqual(i);
        }
        expect(list.length).toEqual(0);
        expect(list.pop()).toEqual(undefined);
    });

    it('should shift values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            let shifted = list.shift();

            // Assert
            expect(shifted.value).toEqual(i);
            expect(shifted.next).toEqual(null);
            expect(shifted.previous).toEqual(null);
            expect(list.length).toEqual(amountOfItems - (i + 1));
        }
        expect(list.length).toEqual(0);
        expect(list.shift()).toEqual(undefined);
    });

    it('should unshift values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            // Act
            list.unshift(i);

            // Assert
            expect(list.head.value).toEqual(i);
            expect(list.length).toEqual(i + 1);
            expect(list.head.previous).toEqual(null);
            if (i === 0) {
                expect(list.head.next).toEqual(null);
                continue;
            }
            expect(list.head.next.value).toEqual(i - 1);
        }
    });

    it('should get values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            let node = list.get(i);

            // Assert
            expect(node.value).toEqual(i);
        }
        expect(list.get(-1)).toEqual(undefined);
        expect(list.get(list.length)).toEqual(undefined);
    });

    it('should set values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            let randomNumber = Math.random() * 100000;
            let result = list.set(i, randomNumber);

            // Assert
            expect(result).toEqual(true);
            expect(list.get(i).value).toEqual(randomNumber);
            expect(list.length).toEqual(amountOfItems);
        }
        // Act
        let negativeIndexResult = list.set(-1, 1);

        // Assert
        expect(negativeIndexResult).toEqual(false);
    });

    it('should insert values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i <= amountOfItems; i++) {
            // Act
            let randomNumber = Math.random() * 100000;
            let { previous: expectedPrevious } = list.get(i);
            let insertionResult = list.insert(i, randomNumber);
            let newNodeAtIndex = list.get(i);

            // Assert
            expect(insertionResult).toEqual(true);
            expect(newNodeAtIndex.value).toEqual(randomNumber);
            expect(newNodeAtIndex.previous).toEqual(expectedPrevious);
            expect(newNodeAtIndex.next.previous).toEqual(newNodeAtIndex);
        }
        // Act
        let endOfListInsertionResult = list.insert(list.length, 1);

        // Assert
        expect(endOfListInsertionResult).toEqual(true);
        expect(list.tail.value).toEqual(1);
        expect(list.tail.next).toEqual(null);

        // Act
        let currentLength = list.length;
        let invalidIndexInsertion = list.insert(-1, 1);
        expect(invalidIndexInsertion).toEqual(false);
        expect(list.length).toEqual(currentLength);
    });

    it('should remove values', () => {
        // Arrange
        let list = new DoublyLinkedList();
        let amountOfItems = Math.floor(Math.random() * 100);
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        // Act
        let removedNode = list.remove(-1);

        // Assert
        expect(removedNode).toEqual(undefined);
        expect(list.length).toEqual(amountOfItems);

        while (list.length > 0) {
            let lengthBeforeRemoval = list.length;
            let indexToRemove = Math.floor(Math.random() * list.length);
            let nodeToBeRemoved = list.get(indexToRemove);

            // Act
            let removedNode = list.remove(indexToRemove);

            // Assert
            expect(list.length).toEqual(lengthBeforeRemoval - 1);
            expect(removedNode).toEqual(nodeToBeRemoved);
            expect(removedNode.next).toEqual(null);
            expect(removedNode.previous).toEqual(null);
        }
    });
});