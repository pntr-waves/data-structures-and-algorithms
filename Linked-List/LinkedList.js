function Node (data) {
    this.data = data;
    this.next = null;
}

function LinkedList () {
    this.head = null;

    this.shift = function (node) {
        if (this.head == null) return;

        if (node != null) {
            node.next = this.head;
            this.head = node;
        } 
    }

    this.append = function (pre, node) {
        if (pre == null) return;

        node.next = pre.next;
        pre.next = node;
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

    console.log("init linked list:")
    printLinkedList(llist);

    //shift 1 node to linked list
    var newHeadNode = new Node(-1);
    console.log("new head node", "[" + newHeadNode.data + "]");

    llist.shift(newHeadNode);

    console.log("init linked list:")
    printLinkedList(llist);

    //append 1 node to linked list
    var newNode = new Node(2.5);
    console.log("new node", "[" + newNode.data + "]");

    llist.append(node2, newNode);

    console.log("init linked list:")
    printLinkedList(llist);

    //push 1 node to linked list

    var newLastNode = new Node(4);
    console.log("new last node", "[" + newLastNode.data + "]");

    llist.push(newLastNode);

    console.log("init linked list:")
    printLinkedList(llist);

}


main();