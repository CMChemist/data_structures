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

    reversePrint = (head = this.head) => {
        if(head == null){
            return null;
        }
        else{
            this.reversePrint(head.next);
            console.log(head.data);
        }
    }

    reverse = (head = this.head) => {

        if (head == null || head.next == null) {
            this.head = head;  
            return head;  
        }
    
        let remaining = this.reverse(head.next);
        head.next.next = head; 
        head.next = null;
        return remaining; 

        // if (node === null) {
        //     return null;
        // } else {
        //     let next = node.next
        //     let isTail = this.reverse(node.next)
        //     if (isTail === null) {
        //         isTail = node;
        //         return isTail;
        //     } else {
        //         if (node === this.head) {
        //             this.head = isTail;
        //             node.next = null;
        //         } else {
        //             next.next = node;
        //         }
        //     }
        //     return isTail
        // }
    }
    //param expected -> (Head of llist1, Head of llist2)
    //Returns -> 1 if llist1 === llist2 / 0 if llist1 != llist2
    //Compares 2 linked lists and deems them to be equal if
    //both lists are the same length and the same data at the
    //same node locations in each list.
    compareLists = (node1, node2) => {
        let result = 1;
        while (node1 != null || node2 != null) {
            if(result === 0) {
                return 0;
            } else if (node1 != null && node2 === null) {
                return 0;
            } else if (node1 === null && node2 != null) {
                return 0;
            } else{
                if (node1.data === node2.data) {
                    result = 1;
                } else {
                    result = 0;
                }
                node1 = node1.next;
                node2 = node2.next;
            }
        }
        return result;
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
const llist2 = new SinglyLinkedList();
// llist.head = firstNode;
// firstNode.next = secondNode;
// secondNode.next = thirdNode;
llist.insertNodeAtTail(1);
llist.insertNodeAtTail(2);
llist.insertNodeAtTail(3);
llist.insertNodeAtHead(0);
llist.insertNodeAtPosition('A', 1);
llist2.insertNodeAtTail(1);
llist2.insertNodeAtTail(2);
llist2.insertNodeAtTail(3);
llist2.insertNodeAtHead(0);
// llist2.insertNodeAtPosition('A', 1);
console.log('*****************')
llist.printLinkedList()
console.log('*****************')
llist2.printLinkedList()
console.log('*****************')
console.log(llist2.CompareLists(llist.head, llist2.head))
// console.log('this.head = ', llist.head)
// llist.reversePrint()
// llist.reverse();
// console.log('*****************')
// llist.printLinkedList()
// llist.deleteNode(0)
// console.log('*****************')
// llist.printLinkedList()
// llist.deleteNode(1)
// // llist.deleteNode(2)
// console.log('*****************')
// llist.printLinkedList()
// llist.deleteNode(2)
// console.log('*****************')
// llist.printLinkedList()
// llist.deleteNode(1)
// console.log('*****************')
// llist.printLinkedList()
// llist.deleteNode(0)
// console.log('*****************')
// llist.printLinkedList()
