// Alongside variables, operators are utilized to create expressions to implement logic/algorithms
// Operator Types: Arithmetic, Assignment, Comparison, Logical, and Bitwise
// ================================================================================================================= //
// Arithmetic Operators
// ----------------------------------------------------------- //
console.log('Arithmetic Operators');
// Arithmetic operators are used to perform calculations. 
// Expression: Produces a value
// Operand: Individual values calculated according to the operator

// Operands
let a = 4,
    b = 44;

// Aritmetic Expressions
let sum = a + b;          // Addition
let difference = b - a;   // Subtraction
let product = a * b;      // Multiplication
let quotient = b / a;     // Division
let remainder = a % b;    // Remainder of Division
let power = b ** a;       // Exponentiation

let arithArr = [sum, difference, product, quotient, remainder, power]; // Declare array that lists expression variables

for(el of arithArr)    // 'For Of Loop' used to iterate thru for iterable objects (array, string, map, set, and more)
    console.log(el);

// Increment Operator '++'
console.log(++b);       // Increments value by 1 first, then prints to console
console.log(b++);       // Prints value to console, then increments by 1
console.log(b);         // Proof that it incremented after printing to console  


// Decrement Operator '--'
console.log(--a);       // Decrements value by 1 first, then prints to console
console.log(a--);       // Prints value to console, then decrements by 1
console.log(a);         // Proof that it decremented after printing to console

/* Arithmetic Console Output
48
40
176
11
4
3748096
45
45
46
3
3
2 */

// Assignment Operators
// ----------------------------------------------------------- //
console.log('Assignment Operators'); // =, '+=', '-=', '*=', etc.
let numA = 1;         // Here is a simple assignment of 1 to numA
numA++;               // This example, using the increment operator, is equivalent to numA = numA + 1.
console.log(numA);
// Let's say we wanted to add 5 to numA.  We can use either the simple addition expression or an
//  addition assignment operator.  The increment operator cannot be used to do this.
numA = null;
numA = numA + 5;     // Simple addition expression
numA += 5;           // A different way to perform the operation above is using the addition 
                     //  assignment operator.
numA *= 10;          // Multiplication assignment operator
console.log(numA);  

// Comparison Operators
// ----------------------------------------------------------- //



// Logical Operators
// ----------------------------------------------------------- //



// Bitwise Operator
// ----------------------------------------------------------- //




