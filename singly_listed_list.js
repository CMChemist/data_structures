class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData
        this.next = null
    }

}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    printLinkedList = () => {
        let node = this.head;
        while(node) {
            console.log(node.data)
            node = node.next;
        }
        if (!this.head) {
            console.log("This Linked List is empty.")
        }
    }

    reversePrint = (head) => {
        if(head == null){
            return null;
        }
        else{
            this.reversePrint(head.next);
            console.log(head.data);
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

    insertNodeAtPosition = (data, position) => {
        const newNode = new SinglyLinkedListNode(data)
        if (this.head && position != 0) { 
            let currentNode = this.getNodeBeforePostion(position);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    deleteNode = (position) => {
        if (this.head && position != 0) { 
            let currentNode = this.getNodeBeforePostion(position);
            const targetNode = currentNode.next;
            if (targetNode) {
                currentNode.next = targetNode.next;
                targetNode.next = null;
            } 
        } else if (this.head && position === 0) {
            const newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
        } 
    }

    //Returns node before the position pass to this method.
    //This method only works for positions > 0.
    getNodeBeforePostion = (position) => {
        let currentNode = this.head
        for(let i=1; i < position; i++) {
            if (currentNode.next) {
                currentNode = currentNode.next
            }
        }
        return currentNode;
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
llist.insertNodeAtHead(0);
llist.insertNodeAtPosition('A', 1);
console.log('*****************')
llist.printLinkedList()
console.log('*****************')
// console.log('this.head = ', llist.head)
llist.reversePrint(llist.head)
llist.deleteNode(0)
console.log('*****************')
llist.printLinkedList()
llist.deleteNode(1)
// llist.deleteNode(2)
console.log('*****************')
llist.printLinkedList()
llist.deleteNode(2)
console.log('*****************')
llist.printLinkedList()
llist.deleteNode(1)
console.log('*****************')
llist.printLinkedList()
llist.deleteNode(0)
console.log('*****************')
llist.printLinkedList()