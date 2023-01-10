import SinglyLinkedList from './SinglyLinkedList';

describe('Singly linked list', () => {
    it('should build correctly', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Assert
        expect(list.head).toEqual(null);
        expect(list.tail).toEqual(null);
        expect(list.length).toEqual(0);
    });

    it('should push a new node into the list', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        list.push('node');

        // Assert
        expect(list.head.value).toEqual('node');
        expect(list.head.next).toEqual(null);
        expect(list.tail).toEqual(list.head);
        expect(list.length).toEqual(1);
    });

    it('should push multiple nodes into the list', () => {
        // Arrange
        let amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        let singlyLinkedList = new SinglyLinkedList();

        // Act
        for (let i = 0; i < amountOfItems; i++) {
            singlyLinkedList.push(i);
            // Assert
            expect(singlyLinkedList.get(i).value).toEqual(i);
        }
        // Assert
        expect(singlyLinkedList.head.value).toEqual(0);
        expect(singlyLinkedList.tail.value).toEqual(amountOfItems - 1);
    });

    it('should pop (remove from the end) values', () => {
        // Arrange
        let list = new SinglyLinkedList();
        const amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = amountOfItems - 1; i >= 0; i--) {
            // Act
            let popped = list.pop();

            // Assert
            expect(popped.value).toEqual(i);
            expect(list.length).toEqual(i);
            expect(popped.next).toEqual(null);
            if (i === 0) {
                expect(list.tail).toEqual(null);
                expect(list.head).toEqual(null);
                continue;
            }
            expect(list.tail.value).toEqual(i - 1);
            expect(list.head.value).toEqual(0);
        }
        expect(list.length).toEqual(0);
        expect(list.pop()).toEqual(null);
        expect(list.length).toEqual(0);
    });

    it('should shift (remove from the start) values', () => {
        // Arrange
        let list = new SinglyLinkedList();
        const amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            let shifted = list.shift();

            // Assert
            expect(list.length).toEqual(amountOfItems - (i + 1));
            expect(shifted.value).toEqual(i);
            if (i === amountOfItems - 1) {
                expect(list.head).toEqual(null);
                expect(list.tail).toEqual(null);
                continue;
            }
            expect(list.head.value).toEqual(i + 1);
            expect(list.tail.value).toEqual(amountOfItems - 1);
        }
    });

    it('should unshift (add to the start) values', () => {
        // Arrange
        let list = new SinglyLinkedList();
        const amountOfItems = Math.max(1, Math.floor(Math.random() * 100));

        
        for (let i = 0; i < amountOfItems; i ++) {
            // Act
            list.unshift(i);

            // Assert
            expect(list.head.value).toEqual(i);
            expect(list.tail.value).toEqual(0);
            expect(list.length).toEqual(i + 1);
        }
        
    });

    it('should get values in a specific index', () => {
        // Arrange
        let list = new SinglyLinkedList();
        let amountOfItems = Math.max(2, Math.floor(Math.random() * 100));
        for (let i = 0; i < amountOfItems; i++) {
            list.push(i);
        }

        for (let i = 0; i < amountOfItems; i++) {
            // Act
            let node = list.get(i);

            // Assert
            expect(list.length).toEqual(amountOfItems);
            expect(node.value).toEqual(i);
        }
    });

    it('should return null if index doesn\'t exist', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        let node = list.get(0);

        // Assert
        expect(node).toEqual(null);
    });

    it('should return null when getting an negative index', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        let node = list.get(-1);

        // Assert
        expect(node).toEqual(null);
    });

    it('should set a value to a specific index', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);
        list.push(2);

        // Act
        let value = list.set(1, 'hi!');

        // Assert
        expect(value).toEqual(true);
        expect(list.get(1).value).toEqual('hi!');
    });

    it('should return false when setting a value to an undefined index', () => {
        // Arrange
        let list = new SinglyLinkedList();
    
        // Act
        let value = list.set(0, 'HI!');

        // Assert
        expect(value).toEqual(false);
        expect(list.length).toEqual(0);
    });

    it('should insert a node in a specific index', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        // Act
        let value = list.insert(2, 'hi!');

        // Assert
        expect(value).toEqual(true);
        expect(list.get(2).value).toEqual('hi!');
        expect(list.get(2).next.value).toEqual(2);
    });

    it('should return false when inserting a node to a negative index', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        let value = list.insert(-1, 'hi!');

        // Assert
        expect(value).toEqual(false);
        expect(list.length).toEqual(0);
    });

    it('should return false when inserting to an index greater than the list length', () => {
        // Arrange
        let list = new SinglyLinkedList();
        
        // Act
        let value = list.insert(1, 'hi!');

        // Assert
        expect(value).toEqual(false);
        expect(list.length).toEqual(0);
    });

    it('should insert at the start', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);

        // Act
        let value = list.insert(0, 'hi!');

        // Assert
        expect(value).toEqual(true);
        expect(list.length).toEqual(3);
        expect(list.get(0).value).toEqual('hi!');
    });
    
    it('should insert at the end', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);

        // Act
        let value = list.insert(2, 'hi!');

        // Assert
        expect(value).toEqual(true);
        expect(list.length).toEqual(3);
        expect(list.get(2).value).toEqual('hi!');
    });

    it('should remove values from a specific index', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);
        list.push(2);

        // Act
        let result = list.remove(1);
        
        // Assert
        expect(result).toEqual(true);
        expect(list.length).toEqual(2);
        expect(list.head.value).toEqual(0);
        expect(list.tail.value).toEqual(2);
    });

    it('should remove from the beggining of the list', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);
        list.push(2);

        // Act
        let result = list.remove(0);
        
        // Assert
        expect(result).toEqual(true);
        expect(list.length).toEqual(2);
        expect(list.head.value).toEqual(1);
        expect(list.tail.value).toEqual(2);
    });

    it('should remove from the end of the list', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);
        list.push(1);
        list.push(2);

        // Act
        let result = list.remove(2);
        
        // Assert
        expect(result).toEqual(true);
        expect(list.length).toEqual(2);
        expect(list.head.value).toEqual(0);
        expect(list.tail.value).toEqual(1);
    });

    it('should return false when removing a negative index', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        let result = list.remove(-1);

        // Assert
        expect(result).toEqual(false);
    });

    it('should return false when removing an index greater than the list length', () => {
        // Arrange
        let list = new SinglyLinkedList();

        // Act
        let result = list.remove(1);

        // Assert
        expect(result).toEqual(false);
    });

    it('should reverse itself', () => {
        // Arrange
        let amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        let singlyLinkedList = new SinglyLinkedList();
        for (let i = 0; i < amountOfItems; i++) {
            singlyLinkedList.push(i);
        }

        // Assert
        expect(singlyLinkedList.head.value).toEqual(0);
        expect(singlyLinkedList.tail.value).toEqual(amountOfItems - 1);

        // Act
        singlyLinkedList.reverse();

        // Assert
        for (let i = amountOfItems - 1; i >= 0; i--) {
            expect(singlyLinkedList.get(i).value).toEqual(amountOfItems - (i + 1));
        }
        expect(singlyLinkedList.head.value).toEqual(amountOfItems - 1);
        expect(singlyLinkedList.tail.value).toEqual(0);
    });

    it('should reverse itself when containing only one node', () => {
        // Arrange
        let list = new SinglyLinkedList();
        list.push(0);

        // Act
        list.reverse();

        // Assert
        expect(list.head).toEqual(list.tail);
        expect(list.head.value).toEqual(0);
        expect(list.length).toEqual(1);
    });
});