"use strict"

/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  You can solve 
this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)

*/

const anyDupes = (...args) => {   // Take a variable # of arguments via spread operator
   let p1 = 0, p2 = args.length -1;
   while(p1 !== args.length -1){
    if(p1 !== p2){
        if(args[p1] === args[p2]) return true;
        p2--;
    } else
    if(p1 === p2){
        p1++;
        p2 = args.length - 1
    }
   }
   return false;
}

console.log(anyDupes(1,2,3));               // false
console.log(anyDupes(1,2,2));               // true
console.log(anyDupes('a','b','c','a'));     // true