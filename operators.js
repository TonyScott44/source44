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

// NOT (!) The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa. 
// It is typically used with boolean (logical) values. 
let noTest = false;
console.log(noTest);
let yesTest = !noTest;
console.log(yesTest);

// Logical Operators w/ Non-Boolean Values

console.log(false || undefined);
console.log(false || 'Canvas Realty Group, LLC'); // With a string
console.log(false || 1); // With a number

/* Falsy
--------
- false
- undefined
- null
- 0
-''
- NaN
*/

// Truthy = Anything that is not Falsy :)

// Short-Circuiting: In a statement utilizing multiple OR operators '||',
// execution ends after the first truthy match.
console.log(false || true || true ); // Execution of this statement ends after the
                                     // first 'true' is matched as truthy.  The 
                                     // second 'true' is not evaluated or 
                                     // executed upon.

// Real world example that can take the user's preferred background color
// or defaults to blue if no color has been selected by the user.
let userColor1 = undefined;
let userColor2 = 'Red';
let defaultColor = 'Blue';
let currentColor = userColor1 || userColor2 || defaultColor;
console.log(currentColor);

/* Logical Operator Console Output
false
true
false
true
undefined
Canvas Realty Group, LLC
1
true
Red
*/

// Bitwise Operators
// ----------------------------------------------------------- //
pt('Bitwise Operators');
// Bitwise operators are very similar to logical operators but they
// work on the individual bits of a number (8 bits = 1 byte)
// We humans generally use numbers in decimal format (1,2,etc).
// Computers understand these numbers in binary format, a combination of 0s and 1s (00000001,00000010, etc.)
// 1 = 00000001
// 2 = 00000010 

// Bitwise results can be thought of as indicators.

console.log(1 | 2);   // Bitwise OR '|'
// Here's what happens:            One could attach an indicator conceptually to each bit
//      1 = 00000001               ex. member for 5+ years
//      2 = 00000010               ex. flown over 100k miles
//          ||||||||   If the bit is on ('1'), the respective/resulting bit is on.
//          vvvvvvvv
// Result = 00000011 = 3           ex. Gold status...This is because it met at least one of the requirements. Condition be based on >=1

console.log(1 | 3);   // Bitwise OR '|'
// Here's what happens:
//      1 = 00000001
//      3 = 00000011
//          ||||||||   If the bit is on ('1'), the respective/resulting bit is on.
//          vvvvvvvv
// Result = 00000011 = 3

console.log(1 & 2);   // Bitwise AND '&'
// Here's what happens:
//      1 = 00000001      
//      2 = 00000010      
//          ||||||||
//          vvvvvvvv
// Result = 00000000 = 0  This is because the bits don't line up (Think of a table that lines up each byte on top
//                        of each other in rows.  If there's s match of '1's in any column, the result is 00000001 or 1
//                        If not, it's 00000000 or 0). 

console.log(1 & 3);   // Bitwise AND '&'
// Here's what happens:
//      1 = 00000001                                                                                ex. card member 10+ yrs
//      3 = 00000011                                                                                ex. spent 25k + last yr
//          ||||||||
//          vvvvvvvv
// Result = 00000001 = 1  This is because the first bit lines up, unlike the following example:     ex. indicates centurion 
//                                                                                                      status because both 
//                                                                                                      requirements were met

console.log(1 & 4);   // Bitwise AND '&'
// Here's what happens:
//      1 = 00000001
//      4 = 00000100
//          ||||||||
//          vvvvvvvv
// Result = 00000000 = 0  This is because non of the  bits line up

// Another simple example of using bitwise operators in the real world is with user access controls (read, write, execute).
// 00000100 = Read Access
// 00000010 = Write Access
// 00000001 = Execute Access
// Technically, users with write access will have read access (not vice verse) and users with execute access will have full access.
// 1 = 00000001 = Read Access Only
// 2 = 00000011 = Read + Write Access
// 4 = 00000111 = Read + Write + Execute Access
console.log(0 | 0); // All Access Denied
console.log(0 | 1); // Read Access Only
console.log(1 | 2);   // Read + Write Access
console.log(3 | 4);   // Read + Write + Execute Access

// Helper Functions
setReadAccess = (userAccess) => {
    userAccess = myAccess | readAccess ? 1 : userAccess;
    myAccess = myAccess | readAccess ? 'Read Access Set' : 'No Change';
    console.log(`Read Access: ${myAccess}`);
    myAccess = userAccess;
}
setWriteAccess = userAccess => {
    userAccess = myAccess | writeAccess ? 3 : userAccess;
    myAccess = myAccess | writeAccess ? 'Write Access Set' : 'No Change';
    console.log(`Write Access: ${myAccess}`);
    myAccess = userAccess;
}
setExecuteAccess = userAccess => {
    userAccess = myAccess | executeAccess ? 7 : userAccess;
    myAccess = myAccess | executeAccess ? 'Execute Access Set' : 'No Change';
    console.log(`Execute Access: ${myAccess}`);
    myAccess = userAccess;
}
chkReadAccess = accessByte => {
    let userAccess = accessByte;
    accessByte = accessByte >= readAccess ? 'Granted' : 'Denied';
    console.log(`Read Access: ${accessByte}`);
    myAccess = accessByte | userAccess;  // Cleanup
}
chkWriteAccess = accessByte => {
    let userAccess = accessByte;
    accessByte = accessByte >= writeAccess ? 'Granted' : 'Denied';
    console.log(`Write Access: ${accessByte}`);
    myAccess = accessByte | userAccess;  // Cleanup
}
chkExecuteAccess = accessByte => {
    let userAccess = accessByte;
    accessByte = accessByte >= executeAccess ? 'Granted' : 'Denied';
    console.log(`Execute Access: ${accessByte}`);
    myAccess = accessByte | userAccess;  // Cleanup
}

const noAccess = 0, readAccess = 1, writeAccess = 3, executeAccess = 7;
let myAccess = 0;

console.log(myAccess) // Check access, shouldn't have any

// Set Read Access
setReadAccess(myAccess);
console.log(myAccess)
// Check Execute Access
chkExecuteAccess(myAccess);
console.log(myAccess)
// Check Write Access
chkWriteAccess(myAccess);
console.log(myAccess)
// Check Read Access
chkReadAccess(myAccess);
console.log(myAccess)

// Set Write Access
setWriteAccess(myAccess);
console.log(myAccess)
// Check Read Access
chkReadAccess(myAccess);
console.log(myAccess)
// Check Write Access
chkWriteAccess(myAccess);
console.log(myAccess)
// Check Execute Access
chkExecuteAccess(myAccess);
console.log(myAccess)

// Set Execute Access
setExecuteAccess(myAccess);
console.log(myAccess)
// Check Read Access
chkReadAccess(myAccess);
console.log(myAccess)
// Check Write Access
chkWriteAccess(myAccess);
console.log(myAccess)
// Check Execute Access
chkExecuteAccess(myAccess);
console.log(myAccess)

/* Bitwise Operator Console Output
3
3
0
1
0
0
1
3
7
0
Read Access: Read Access Set
1
Execute Access: Denied
1
Write Access: Denied
1
Read Access: Granted
1
Write Access: Write Access Set
3
Read Access: Granted
3
Write Access: Granted
3
Execute Access: Denied
3
Execute Access: Execute Access Set
7
Read Access: Granted
7
Write Access: Granted
7
Execute Access: Granted
7
*/

// A future challenge with the bitwise operators will be to use the bitwise AND operator to change permissions (instead of the >= operator).