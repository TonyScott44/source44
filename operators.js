// Function to print each topic which makes it easier to match this file's output in the console
pt = topic => {
    console.log(topic);
}

// Alongside variables, operators are utilized to create expressions to implement logic/algorithms
// Operator Types: Arithmetic, Assignment, Comparison, Logical, and Bitwise
// ================================================================================================================= //
// Arithmetic Operators
// ----------------------------------------------------------- //
pt('Arithmetic Operators');
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
console.log(a--);       // Prints value to console, then decrements by one
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
pt('Assignment Operators'); // =, '+=', '-=', '*=', etc.
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

/* Assignment Operator Console Output
2
100 */

// Comparison Operators
// ----------------------------------------------------------- //
pt('Comparison Operators');
// Utilized to compare the value of a variable to something else.
// The result of an expression using a comparison operator is boolean.

// Comparison - Relational 
let relVar1 = 4, relVar2 = 12;
let relObj = {
    test1: relVar1 > relVar2,  // Greater Than? False
    test2: relVar1 < relVar2,  // Less Than? True
    test4: relVar2 >= relVar2, // Greater Than/Equal? True
    test5: relVar1 <= relVar1  // Less Than/Equal? True
}
console.log(relObj);

/* Comparison Operator Console Output
{ test1: false, test2: true, test4: true, test5: true } */

// Equality 
// '==' Loose Equality (Converts operand2 to the type of operand1 then compares the values)
// '===' Strict Equality (Compares type and value)
let compVar1 = 4, compVar2 = 12;
let compObj = {
    test1: compVar1 === '4',  // Strict Equality.......Equal? False because types are different
    test2: compVar1 !== compVar2,  // Not Equal? True
    test3: compVar1 == '4',        // Loose Equality.......Equal? True, even though the second operand is a string 
}
console.log(compObj);

/* Equality Operator Console Output
{ test1: false, test2: true, test3: true }
*/

// Ternary/Conditional Operator

/* If school year is 12 (high school senior) or below, course level is grade school. 
   If school year is 13 (college freshman) or higher, course level is college.       */

let schoolYear = 16; // school year
courseLevel = schoolYear > 12 ? 'College' : 'Grade School';  
console.log(courseLevel);

/* Ternary Operator Console Output
'College'
*/

// Logical Operators
// ----------------------------------------------------------- //
pt('Logical Operators');

let lOperand1 = true, lOperand2 = false;
// Logical opeators are used to make decisions based on multople conditions

// Logical AND (&&) Returns True if both operands are True
console.log(lOperand1 && lOperand2); 
// Logical OR (||) Returns True if one of the operands is True
console.log(lOperand1 || lOperand2);

// NOT (!) 
let noTest = false;
console.log(noTest);
let yesTest = !noTest;
console.log(yesTest);


// Bitwise Operator
// ----------------------------------------------------------- //
pt('Bitwise Operators');