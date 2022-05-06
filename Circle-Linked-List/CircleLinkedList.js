function Node (data) {
    this.data = data;
    this.next = null;
} 

function CircleLinkedList () {
    this.length = 0;

    var _calcLength = function (start) {
        this.length = 0;
        if (start) {
            var temp = start;
            do {
                this.length++;
                temp = temp.next;
            } while(temp !== start);
        }
    }

    this.push = function (node, start) {
        var temp = start;
        node.next = start;
        if (start) {
            while (temp.next !== start) {
                temp = temp.next;
            }
            temp.next = node;
        } else {
            node.next = node;
        }

        _calcLength.call(this, start);
    }

    this.print = function (start) {
        var result = [];
        if (start) {
            var temp = start;
            do {
                result.push(temp.data);
                temp = temp.next;
            } while (temp !== start);
        }

        console.log("data", result, "length: ", this.length);
    }

    var _init = function (node) {
        node.next = node;
    }

    this.append = function (node, last, key) {
        if (last) {
            if (key) {
                var temp = last;
                do {
                    if (temp.data === key) {
                        node.next = temp.next;
                        temp.next = node;
                    }

                    temp = temp.next;
                } while (temp !== last);
            } else {
                node.next = last.next;
                last.next = node;
            }
        } else {
            _init(node);
        }

        _calcLength.call(this, last);
    }

    this.pop = function (start, key) {
        var current = start;
        var prv = null;
        if (start) {
            
            while (current.next !== start) {
                if (current.data === key) {
                    if (prv) {
                        prv.next = current.next;
                        current.next = null;
                        return;
                    } else {
                        current = null;
                    }
                } 

                prv = current;
                current = current.next;
            }

        }

        _calcLength.call(this, start);
    }
}

function printBreak (title) {
    console.log("");
    console.log("=============" + title +"=============");
    console.log("");
}

function main () {
    var circlell = new CircleLinkedList();

    printBreak("Init node");

    var node0 = new Node(0);
    console.log("new node", "[" + 0 + "]");
    circlell.push(node0);
    var node1 = new Node(1);
    console.log("new node", "[" + 1 + "]");
    circlell.push(node1, node0);
    var node2 = new Node(2);
    console.log("new node", "[" + 2 + "]");
    circlell.push(node2, node1);
    var node3 = new Node(3);
    console.log("new node", "[" + 3 + "]");
    circlell.push(node3, node2);

    //store last node
    var last = node3;

    printBreak("Print Circle Linked List");
    circlell.print(node0);

    printBreak("Append node [4] to Circle Linked List")
    var node4 = new Node(4);
    circlell.append(node4, last);
    last = node4;
    circlell.print(node0);

    printBreak("Append node [-1] to Circle Linkded List");
    var node5 = new Node(-1);
    circlell.append(node5, last, 4);
    circlell.print(node0);

    printBreak("Append node [2.5] after [2]");
    var node6 = new Node(2.5);
    circlell.append(node6, last, 2);
    circlell.print(node0);

    printBreak("DeleteNode with key = 2.5");
    circlell.pop(node0, 2.5);
    circlell.print(node0);
}

main();


