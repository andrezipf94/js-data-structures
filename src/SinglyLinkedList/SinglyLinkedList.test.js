import SinglyLinkedList from './SinglyLinkedList';

describe('Singly linked list', () => {
    it('should build correctly', () => {
        let list = new SinglyLinkedList();
        expect(list.head).toEqual(null);
        expect(list.tail).toEqual(null);
        expect(list.length).toEqual(0);
    });

    it('should push a new node into the list', () => {
        let list = new SinglyLinkedList();
        list.push('node');
        expect(list.head.value).toEqual('node');
        expect(list.head.next).toEqual(null);
        expect(list.tail).toEqual(list.head);
        expect(list.length).toEqual(1);
    });

    it('should push multiple nodes into the list', () => {
        let amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        let singlyLinkedList = new SinglyLinkedList();
        for (let i = 0; i < amountOfItems; i++) {
            singlyLinkedList.push(i);
            expect(singlyLinkedList.get(i).value).toEqual(i);
        }
        expect(singlyLinkedList.head.value).toEqual(0);
        expect(singlyLinkedList.tail.value).toEqual(amountOfItems - 1);
    });

    it('should reverse itself', () => {
        let amountOfItems = Math.max(1, Math.floor(Math.random() * 100));
        let singlyLinkedList = new SinglyLinkedList();
        for (let i = 0; i < amountOfItems; i++) {
            singlyLinkedList.push(i);
        }
        expect(singlyLinkedList.head.value).toEqual(0);
        expect(singlyLinkedList.tail.value).toEqual(amountOfItems - 1);

        singlyLinkedList.reverse();
        for (let i = amountOfItems - 1; i <= 0; i--) {
            expect(singlyLinkedList.get(i).value).toEqual(amountOfItems - (i + 1));
        }
        expect(singlyLinkedList.head.value).toEqual(amountOfItems - 1);
        expect(singlyLinkedList.tail.value).toEqual(0);
    });
});