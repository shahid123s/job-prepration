// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    display() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

// Create first sorted linked list: 1 -> 3 -> 5 -> 7
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);
console.log('List 1:');
list1.display();

// Create second sorted linked list: 2 -> 4 -> 6 -> 8
const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);
console.log('List 2:');
list2.display();


// Function to merge two sorted linked lists

function merge (list1, list2){
    let dummy = new LinkedList();
    let p1 = list1.head;
    let p2 = list2.head;

    while(p1 && p2 ){
        if(p1.data < p2.data){
            dummy.append(p1.data);
            p1 = p1.next;
        } else {
            dummy.append(p2.data);
            p2 = p2.next;
        }
    }
    
    while(p1){
        dummy.append(p1.data);
        p1 = p1.next;
    }

    while(p2){
        dummy.append(p2.data);
        p2 = p2.next;
    }

    return dummy;
}




