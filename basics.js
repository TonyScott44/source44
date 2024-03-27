// Variables

let name;  // Because variable hasn't been assigned a value, its value is 'undefined'
console.log('My name is ' + name);

let firstName = 'Tony';
let lastName = 'Scott';
console.log('My name is ' + firstName + ' ' + lastName + '.');

// If you don't need to reassign, use a constant

const fName = 'Anthony';
const mName = 'Charles';
const lName = 'Scott Jr';
console.log('My name is ' + fName + ' ' + mName + ' ' + lName + '.');

//fName = 'Tony'; (TypeError: Assignment to constant variable.)

// ========================================================================================================= //
// Primitives / Value Types
//  String, Number, Boolean, Undefined, & Null

let vehicle = 'Tesla Model Y Performance';  // String literal
let vehicleYear = 2028;                     // Number Literal
let isCharged = true;                       // Boolean Literal
let z260;                                   // Undefined
console.log(vehicleYear);
vehicleYear = null;                         // Null - Use when you want to clear the value of a variable
console.log(vehicleYear);
vehicleYear = 2023; 

// ========================================================================================================= //
// Dynamic Typing - JavaScript is a dynamic language.  A variable can be reassigned to different types.
// Typeof Operator
console.log(typeof(vehicleYear));  // number - JS only has one # type (some languages use int and float)
vehicleYear = '2023'
console.log(typeof(vehicleYear));  // string

// ========================================================================================================= //
// Reference Types
//  Object, Array, & Functions
// ----------------------------------------------------------- //
/* Objects:  Utilize when there are multiple related variables. There are a myriad of object keywords/properties  
   that you can use using dot notation. */
//  Reference object and not individual variables, makes code cleaner.
let vehicle1 = {      // Object Literal {}
    year: 2023,       // Key:Value Pairs
    make: 'Tesla',    // year, make and model are properties of the vehicle1 object.
    model: 'Model Y'
};
console.log(vehicle1.year);      // Uses Dot Notation to read value of property.  
console.log(vehicle1['make']);   // Uses Bracket Notation
console.log(vehicle1.model);
console.log(vehicle1);
vehicle1.year = '2024';          // Uses Dot Notation to assign new value and type
vehicle1['model'] = 'Model X';      // Uses Bracket Notation
console.log(vehicle1);

/* Dot Notation is more concise and cleaner so it should be your default.  However, if you don't know the name of the target property until
   runtime (based on user selection), you should store the potential/possible property name in a variable and use Bracket Notation. */

// Function that takes an object, references random property of the object and returns it.
let randomProp = obj => {
    let keys = Object.keys(obj);
    console.log(keys);
    return keys[keys.length * Math.random() << 0];
};
let propSelection = randomProp(vehicle1); // AI user input
console.log(vehicle1[propSelection]);     // Here you can see bracket notation being used to reference an unknown property.
console.log(vehicle1.propSelection);      /* This is expected to print 'undefined' because dot notation cannot be used here. This is because 
                                             propSelection is not an actual property of vehicles1. */
// ----------------------------------------------------------- //
/* Arrays: Data structure utilized to present a list of values (ex. list of objects).  Arrays in JS are dynamic and can include different types of values.  Different 
   value types can be added and the length can change anytime.  In JS, arrays are objects.  There are a myriad of array keywords/properties that you 
   can use using dot notation. */
let vehicleColors = [];  // Array initialized with brackets.  This is an array literal
// Add to array
vehicleColors[0] = 'blue';
console.log(vehicleColors);
vehicleColors[1] = 44;
console.log(vehicleColors);
console.log(vehicleColors.length); // Use length keyword to get length of an array
console.log(typeof(vehicleColors)); // Arrays are objects with properties(keywords)
// ----------------------------------------------------------- //
// Functions performs a task (ex. calculate something)
// Functions don't require semicolons at the end.  
// Functions take in arguments (function call)/parameters (function declaration)
// There are two ways to declare a function, traditional and ES6 (arrow functions)

// Traditional
function greeter (fName,lName){  // Function declaration with two paramaters
   console.log('Hello ' + fName + ' ' + lName);
}
greeter('Tony','Scott'); // Function call with two arguments 

// ES6 Arrow Function using template literals to create string output
location = (city, state) => {
   console.log(`Location: ${city}, ${state}`);
}
location('Atlanta', 'Georgia');

// Calculate the square of a number
square = num => {
   return num*num;
};
console.log(square(4));

/* Output 
My name is undefined
My name is Tony Scott.
My name is Anthony Charles Scott Jr.
2028
null
number
string
2023
Tesla
Model Y
{ year: 2023, make: 'Tesla', model: 'Model Y' }
{ year: '2024', make: 'Tesla', model: 'Model X' }
[ 'year', 'make', 'model' ]
Tesla
undefined
[ 'blue' ]
[ 'blue', 44 ]
2
object
Hello Tony Scott
Location: Atlanta, Georgia
16
*/