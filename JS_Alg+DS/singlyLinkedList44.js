// Data Structures: Singly Linked List
class Node{                   // This class is called by/used by the SinglyLinkedList class to create a new node to add to the list
    constructor(val){         // Pass in the value for this new node
        this.val = val;       // Set the value of this new node to the value passed in
        this.next = null;     // Set the node's next to null (being that we will set it's next within the SinglyLinkedList class if needed)
    }
}
class SinglyLinkedList{       // This class creates a fresh singly linked list, which includes a head, tail, and length of the new list 
    constructor(){            // When constructing the list....
        this.head = null;     //    Set the head to null
        this.tail = null;     //    Set the tail to null
        this.length = 0;      //    and set the lenghth to 0  (because it's a fresh new list, it's empty)
    }
    // Push Method: Adds node to the end of list
    push(val){     
        let newNode = new Node(val);
        if(!this.head){   // If this is the first node being added...
            this.head = newNode;  // Create new node based on the node class and make it the head.
            this.tail = this.head; // Being that it's only a single node in the list, make it the tail as well.
        } else { // If a node already exists in the list....
            this.tail.next = newNode; // Set next of existing tail to new node. This existing tail will become the node right before the new node/tail
            this.tail = newNode; // Set the tail to the new node.
        }
        this.length++; // Increase the length of the new tail
        return this; // Return modified list
    }
    // Pop Method: Removes node from end of list
    pop(){
        if(this.length === 0) return undefined; // Edge case:  Make sure at least one node is in the list
        let current = this.head;        // We need to start at the beginning of the list to start this process, set current to head
        let prev;                       // Keeping track of prev node (node that comes before current) allows us to set a new tail once we pop
        while(current){                 // While there is a current (there always will be, this just allows the loop to keep going until we return the modified list)
            if(current.next === null){  // If we've made it to the end of the list (last node/tail)
                if(this.length === 1){  // If list only has one node...
                    this.head = null;   // Set head
                    this.tail = null;   //     and tail to null (meaning the list will have 0 nodes when execution is complete)
                } else {                // If list has multiple items in the list...
                    prev.next = null;   // Set prev.next to null (because prev will be the new tail) 
                    this.tail = prev;   //     and set the tail to be prev
                }
                this.length--;          // Decrement the length of the list
                return this;            //     and return the modified list
            }
            prev = current;            // Set prev to current (this will keep happening until we get to the end of the list)
            current = current.next;    // Set current to the next item in the list
        }
    }
    // Shift: Removes node from the beginning of list
    shift(){
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0)this.tail = null;
        return oldHead.val; 
    }

    unshift(val){
        if(this.length === 0){
            return this.push(val);
        } else{
            let newNode = new Node(val);
            let oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
            this.length++;
            return this;
        }
    }


    // Traverse
    traverse(){                             // Traverse allows us to go through each node in the list from beginning to end (in case we're looking for something specific)
        let current = this.head;            // We need to start at the beginning of the list to start this process, set current to head
        while(current){                     // Loop until current is equal to null (at some point, current will be equal to the tail's next which is null)
            if(current){                    // If current is not null...
                console.log(current.val);   // Print the current node's value
                current = current.next;     // Set the new current to the current node's next
            }
        }
        
    }
}

let list = new SinglyLinkedList()
console.log(list.push('Dynamic Programming'));
list.push('Data Structures');
list.push('Algorithms');
list.push('Merge Sort');
list.push('Radix Sort');
list.push('Recursion');
list.push('Linked Lists');
list.push('Graphs');
list.traverse();

console.log(list.pop());
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.unshift('Systems Design'));
console.log(list.unshift("You're Hired!!!"));



/*
Output:

SinglyLinkedList {
  head: Node { val: 'Dynamic Programming', next: null },
  tail: Node { val: 'Dynamic Programming', next: null },
  length: 1
}
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
Dynamic Programming
SinglyLinkedList {
  head: Node {
    val: 'Data Structures',
    next: Node { val: 'Algorithms', next: [Node] }
  },
  tail: Node { val: 'Linked Lists', next: null },
  length: 6
}
Data Structures
Algorithms
Merge Sort
Radix Sort
Recursion
Linked Lists
undefined
SinglyLinkedList {
  head: Node { val: 'Systems Design', next: null },
  tail: Node { val: 'Systems Design', next: null },
  length: 1
}
SinglyLinkedList {
  head: Node {
    val: "You're Hired!!!",
    next: Node { val: 'Systems Design', next: null }
  },
  tail: Node { val: 'Systems Design', next: null },
  length: 2
}
*/

