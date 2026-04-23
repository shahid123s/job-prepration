class Node {
    constructor(ele){
        this.val = ele;
        this.right = null;
        this.left = null;
    }
}


class DoublyList {
    constructor (){
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    createNode(ele){
        let newNode = new Node(ele);
        return newNode;
    }
    
    addFirst (ele){
        let newNode = this.createNode(ele);
        if(this.head == null){
            this.head = newNode;
            this.last = this.head;
            this.size++;
            return ;
        }
        let curr = this.head;
        this.head = newNode;
        curr.left = this.head;
        this.head.right = curr;

        this.size++ ;
        return 'Added on first'
    }

    removeLast (){
        if(this.head === null){
            return ' Nothing to del... try to add elem';
        }
        if(this.size == 1){
            this.head = null;
            this.last = null;
            this.size--;
            return;
        }
        let out = this.last.val;
        let curr = this.last.left;
        curr.right = null;
        this.last =curr;
        this.size--;
        console.log( 'Removed the last ele')
        return out
    }

    removeFirst(){
        if(this.head == null) return 'nothing to del.. add ele ';
        if(this.size == 1){
            this.head = null;
            this.last = null;
            this.size--;
            return;
        }
        let curr = this.head.right;
        curr.left = null;
        this.head = curr;
        this.size--;
        return 'removed the first elem'
    }
    
    addLast(ele){
        let newNode = this.createNode(ele)
        if(this.head === null) {
            this.head = newNode;
            this.last = this.head;
            this.size ++;
            return 'Added the ele'
        }
        let curr = this.last;
        curr.right = newNode;
        this.last = newNode;
        newNode.left = curr;
        this.size++;
        return 'New Ele aadded';
    }
}


// time complexity is O(1)
// Space complexity is O(n)