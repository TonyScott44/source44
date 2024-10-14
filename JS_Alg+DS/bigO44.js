/*Big O Notation
-  To analyze the performance of an algorithm, we use Big O Notation
-  Big O Notation can give us a high level understanding of the time or space
   complexity of an algorithm.
-  Big O Notation doesn't care about precision, only about general trends (linear? quadratic?
   constant?)
-  The time or space complexity (as measured by Big O) depends only on the algorithm,
   not the hardware used to run the algorithm.

Counting Operations & Assignments to Determine Runtime
- Evaluate operators like +,/,*,mod, etc. and assignments like =, ++, --, etc.
- If such operators and assignments are in a loop, then these operators and assignments will have to execute n times, which increases the runtime
- This also accounts for comparison operators like ==,===, <,>,etc.
*/

//Example 1:
function addUpTo(n){
  return n * (n + 1) / 2;  // 1 multiplication  = 1 | 1 addition = 1 | 1 division = 1
}        // 3    (none of the operations are recurring based on n)  | Constant
console.log(addUpTo(5));

//Example 2:
function addUpTo(n) {
  let total  = 0;                   // 1 assignment = 1
  for(let i = 1; i <= n; i++){ // 1 assignment = 1 | n comparisons = 2n | n additions & assignments = 2n
    total += i;                      // n additions and assignments = 2n
  }
 return total;
}         /* 6n + 2  (6 operations etc. are recurring in the for loop based on n| Linear. Depending on what we count, 
             the number of operations can be as low as 3 or as high as 6n+2.  Regardless of the exact number, the 
             number of operations grows roughly proportionally with n. */

// Introduction to Big O Notation

/* Time Complexity
Big O Notation is a way to formalize fuzzy counting.  It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.  The details aren't as important as the trends.
Time complexity refers to analyzing the runtime of an algorithm as the size of the inputs increases. */

//Example 3 Time:
function countUpAndDown(n){
  console.log("Going up!");
  for (let i = 0; i < n; i++){ // As n grows, this loop(# of operations/comparisons etc. within) grow O(n)
    console.log(i);
  }
  console.log("At the top!\nGoing down…");
  for (let j = n -1; j >= 0; j--) { // As n grows, this loop(# of operations, etc. etc. within) grow O(n)
    console.log(j);
  }
  console.log("Back down. Bye!");
}   //O(2n) is simplified down to O(n) because we only care about the trends | Linear
countUpAndDown(10);

//Example 4 Time:
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {     // O(n)
    for (var j = 0; j < n; j++) {   // O(n)
      console.log(i, j);
    }
  }
}  /* Because of the nested loop, the Big O Notation is O(n²)    | Quadratic
    As n grows, the runtime grows roughly at the rate of n² */
printAllPairs(2);

/*Rules of Thumb for Time Complexity
1. Arithmetic operations are constant
2. Variable assignments are constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of that loop */

/* Space Complexity
Space complexity refers to how much additional memory needed to allocate in order to run the code in our algorithm.
As n grows towards infinity, the size(space) of the input itself grows.  This can be ignored, as the space required 
by the algorithm, rather the input, is more important.  Sometimes you'll hear the term auxiliary space complexity to 
refer to space required by the algorithm, not including space taken up by the inputs.  We should focus on auxiliary 
space complexity when determining the space complexity of an algorithm.  We're focusing on what happens inside of the algorithm.

Rules of Thumb for Space Complexity
-  Most primitives (booleans, numbers, undefined, & null) are  constant space.
-  Strings require O(n) space (where n is the string length).
-  Reference types are generally O(n), where n is the length(for arrays) or the numbers of keys(for objects) */

//Example 1 Space:
function sum(arr) {
  let total = 0;                                 // O(1) ….from the 'total = 0'
  for (let i = 0; i < arr.length; i++) {         // O(1)......from the 'i = 0'
    total += arr[i];
  }
return total;
}    // Total space complexity is O(2) simplified to O(1) space / constant
     // The number of times total and i are added to, etc. doesn't matter.  All that matters are the declarations.
console.log(sum([4,40]));

//Example 2 Space:
function double(arr) {
  let newArr = [ ];                       // O(1)...from let newArr = [ ]....At this point, nothing is being added
  for (let i = 0; i < arr.length; i++) {  // O(1)....from let i = 0
    newArr.push(2 * arr[ i ]);            // As n grows, the number of elements in this array grows  O(n)          
  }
  return newArr;
}  // Total space complexity is O(n + 2) simplified to O(n) space/ linear
console.log(double([6,22]));