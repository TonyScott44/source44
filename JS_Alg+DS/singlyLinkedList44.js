// Data Structures: Singly Linked List
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push Method
    push(val){     
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Pop Method

    // Traverse
    traverse(){
        let current = this.head;
        while(current){
            if(current){
                console.log(current.val);
                current = current.next;
            }
        }
        
    }
}

let list = new SinglyLinkedList()
list.push('Love 4 CS');
list.push('Data Structures');
list.push('Algorithms');
list.push('Merge Sort');
list.push('Bubble Sort');
list.push('Algorithms');
list.push('Linked Lists');
list.push('Graphs');


list.traverse();


