function Node (data) {
    this.data = data;
    this.next = null;
}

function LinkedList () {
    this.head = null;
}

function printLinkedList (linkedList) {
    var result = [];
    if (linkedList.head) {
        var node = linkedList.head;
        
        while (node.next) {
            result.push(node.data);
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

    printLinkedList(llist);

}


main();