import Node from './Node';

describe("Singly linked list node", () => {
    it("should correctly build", () => {
        let node = new Node('Value');
        expect(node.value).toEqual('Value');
        expect(node.next).toEqual(null);
    });
});