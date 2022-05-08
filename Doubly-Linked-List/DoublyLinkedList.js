function Node(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.push = function (node) {
        if (this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    this.insertAfter = function (prevNode, node) {
        if (prevNode) {
            var temp = prevNode.next;
            node.next = temp;
            temp.prev = node;
            prevNode.next = node;
            node.prev = prevNode;
        }
    }

    this.unShift = function (node) {
        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    this.print = function () {
        var result = [];
        var temp = this.head;
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }

        console.log(result);
    }

    this.delete = function (node) {
        if (this.head === node) {
            this.head = node.next;
        }

        if (this.tail === node) {
            this.tail = node.prev;
        }

        if (node.next !== null) {
            node.next.prev = node.prev;
        }

        if (node.prev !== null) {
            node.prev.next = node.next;
        }
    }
}

function printBreak (title) {
    console.log("");
    console.log("=============" + title +"=============");
    console.log("");
}


function main() {
    var doublyLinkedList = new DoublyLinkedList();
    printBreak("init Doubly Linked List");
    console.log("push node [0]");
    var node0 = new Node(0);
    doublyLinkedList.push(node0);
    console.log("push node [1]");
    var node1 = new Node(1);
    doublyLinkedList.push(node1);
    console.log("push node [2]");
    var node2 = new Node(2);
    doublyLinkedList.push(node2);
    console.log("push node [3]");
    var node3 = new Node(3);
    doublyLinkedList.push(node3);
    console.log("push node [4]");
    var node4 = new Node(4);
    doublyLinkedList.push(node4);

    doublyLinkedList.print();

    printBreak("insert node [2.5] after node [2]");
    var node5 = new Node(2.5);
    doublyLinkedList.insertAfter(node2, node5);
    doublyLinkedList.print();

    printBreak("insert node [-1]");
    var node6 = new Node(-1);
    doublyLinkedList.unShift(node6);
    doublyLinkedList.print();

    printBreak("delete node [2.5]");
    doublyLinkedList.delete(node5);
    doublyLinkedList.print();
}


main();