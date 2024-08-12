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
    pop(){
        if(this.length === 0) return undefined;
        let current = this.head;
        let prev;
        while(current){  
            if(current.next === null){
                if(this.length === 1){
                    this.head = null;
                    this.tail = null;
                } else {
                    prev.next = null;
                    this.tail = prev;
                }
                this.length--;
                return this;
            }
            prev = current;
            current = current.next;
        }
    }
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
list.push('Dynamic Programming');
list.push('Data Structures');
list.push('Algorithms');
list.push('Merge Sort');
list.push('Radix Sort');
list.push('Recursion');
list.push('Linked Lists');
list.push('Graphs');
list.traverse();

console.log(list.pop());
console.log(list.pop());

/*
Output:

Dynamic Programming
Data Structures
Algorithms
Merge Sort
Radix Sort
Recursion
Linked Lists
Graphs
SinglyLinkedList {
  head: Node {
    val: 'Dynamic Programming',
    next: Node { val: 'Data Structures', next: [Node] }
  },
  tail: Node { val: 'Linked Lists', next: null },
  length: 7
}
SinglyLinkedList {
  head: Node {
    val: 'Dynamic Programming',
    next: Node { val: 'Data Structures', next: [Node] }
  },
  tail: Node { val: 'Recursion', next: null },
  length: 6
}
*/

