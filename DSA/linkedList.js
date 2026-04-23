class Node {
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList {
    constructor (){
        this.head = null;
        this.size = 0;
        this.last = null;
    }


    createNode(ele){
        let newNode = new Node(ele)
        return newNode;
    }

    addEle(ele){
        this.size++
        if(this.head === null) {
            this.head = this.createNode(ele);
            this.last = this.head;
            return 
        }
        let curr = this.last;
        curr.next = this.createNode(ele);
        this.last = curr.next;
        return 'added'
    }
    removeLastEle() {
        if(this.head === null) {
            console.log("Linked List have no element to remove !!!")
            return "Linked List have no element to remove !!!"
        }
        else if(this.head.next === null) {
            this.size--;
            this.head = null;
            this.last = null;
            return 
        }
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = null
        this.last = curr;
        this.size --;
    }

    length(){
        return this.size;
    }

    changeHead(ele){
        this.size++
        if(this.head === null){
            this.head = this.createNode(ele);
            return 'Node Added to front'
        }
        let curr = this.head;
        this.head = this.createNode(ele);
        this.head.next = curr;
        return 'Node Added to front'
    }

}






// Now time Complexity of the addEle is O(1) and removeEle is O(n);