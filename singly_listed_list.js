class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData
        this.nextNode = null
    }

}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    printllist = () => {
        let node = this.head;
        while(node) {
            console.log(node.data)
            node = node.next;
        }
    }

}

const firstNode = new SinglyLinkedListNode(1)
const secondNode = new SinglyLinkedListNode(2)
const thirdNode = new SinglyLinkedListNode(3)
const llist = new SinglyLinkedList();
llist.head = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;

llist.printllist()