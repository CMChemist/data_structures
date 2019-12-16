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

    insertNodeAtTail = (data) => {
        const newNode = new SinglyLinkedListNode(data)
        if (this.head) {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        } else {
            this.head = newNode
        }
    }

    insertNodeAtHead = (data) => {
        const newNode = new SinglyLinkedListNode(data)
        newNode.next = this.head;
        this.head = newNode
    }
}

// const firstNode = new SinglyLinkedListNode(1)
// const secondNode = new SinglyLinkedListNode(2)
// const thirdNode = new SinglyLinkedListNode(3)
const llist = new SinglyLinkedList();
// llist.head = firstNode;
// firstNode.next = secondNode;
// secondNode.next = thirdNode;
llist.insertNodeAtTail(1);
llist.insertNodeAtTail(2);
llist.insertNodeAtTail(3);

llist.printllist()