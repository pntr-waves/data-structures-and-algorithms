function Node (data) {
    this.data = data;
    this.next = null;
}

function LinkedList () {
    this.head = null;
    this.length = 0;

    this.unShift = function (node) {
        if (this.head == null) return;

        if (node != null) {
            node.next = this.head;
            this.head = node;
        } 

        this.updateLength();
    }

    this.append = function (pre, node) {
        if (pre == null) return;

        node.next = pre.next;
        pre.next = node;
        
        this.updateLength();
    }

    this.push = function (node) {
        if (this.head == null) {
            this.head = node;
            return;
        }

        var last = this.head;

        while (last.next) {
            last = last.next;
        }

        last.next = node;

        this.updateLength();
    }

    this.deleteNodeByData = function (data) {
        var node = this.head; 
        var pre = null;

        if (node != null && node.data === data) {
            this.head = node.next;
            return;
        }

        while (node != null && node.data !== data) {
            pre = node;
            node = node.next;
        }

        if (node == null) return;

        pre.next = node.next;

        this.updateLength();
    }

    this.updateLength = function () {
        var node = this.head;
        if (node == null) return;
        
        this.length = 0;
        while (node != null) {
            this.length++;
            node = node.next;
        }
    }

    this.findNodeByData = function (data) {
        if (this.head === null) return;

        var node = this.head;

        while (node) {
            if (node.data === data) return node;

            node = node.next;
        }

        return null;
    }

    this.reverse = function () {
        if (this.head == null) return;

        var node = this.head;
        var pre = null;
        var next = null;
        while (node) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }

        this.head = pre;

    }
}

function printLinkedList (linkedList) {
    var result = [];
    if (linkedList.head) {
        var node = linkedList.head;
        result.push(node.data);
        while (node.next) {
            result.push(node.next.data);
            node = node.next;
        }
    }
    console.log("data", result);    
}

function printBreak (title) {
    console.log("");
    console.log("=============" + title +"=============");
    console.log("");
}


function main () {
    var llist = new LinkedList(); //create linked list

    //create node;

    var head = new Node(0);
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);

    llist.head = head;
    llist.head.next = node1;
    node1.next = node2;
    node2.next = node3;

    printBreak("Create Linked List");
    console.log("init linked list:")
    printLinkedList(llist);

    //unShift 1 node to linked list
    var newHeadNode = new Node(-1);
    
    llist.unShift(newHeadNode);
    
    printBreak("UnShift");
    console.log("new head node", "[" + newHeadNode.data + "]");
    printLinkedList(llist);
    console.log("Length is updated: ", llist.length);

    //append 1 node to linked list
    var newNode = new Node(2.5);
    
    llist.append(node2, newNode);
    
    printBreak("Append");
    console.log("new node", "[" + newNode.data + "]");
    printLinkedList(llist);
    console.log("Length is updated: ", llist.length);

    //push 1 node to linked list

    var newLastNode = new Node(4);
    
    llist.push(newLastNode);
    
    printBreak("Push");
    console.log("new last node", "[" + newLastNode.data + "]");
    printLinkedList(llist);
    console.log("Length is updated: ", llist.length);


    //delete node;
    printBreak("Delete Node");
    console.log("Delete node with data = 3");
    llist.deleteNodeByData(3);

    printLinkedList(llist);
    console.log("Length is updated: ", llist.length);

    //find node with data
    var targetNode = llist.findNodeByData(2);

    printBreak("Find Node");
    console.log("Find node with data = 2");
    console.log("target node: ", targetNode ? "[" + targetNode.data + "]" : "[" + "]");

    printBreak("Reverse LinkedList");
    llist.reverse();
    printLinkedList(llist);

}


main();