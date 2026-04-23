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
    }


    createNode(ele){
        let newNode = new Node(ele)
        return newNode;
    }

    addEle(ele){
        this.size++
        if(this.head === null) {
            return this.head = this.createNode(ele);
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = this.createNode(ele);

    }
    removeLastEle() {
        if(this.head === null) {
            console.log("Linked List have no element to remove !!!")
            return "Linked List have no element to remove !!!"
        }
        else if(this.head.next === null) {
            this.size--;
            return this.head = null;
        }
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = null
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






