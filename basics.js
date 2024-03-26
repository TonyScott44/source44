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

// ------------------------------------------------------------------------------------------------------- //
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

// ------------------------------------------------------------------------------------------------------- //
// Dynamic Typing - JavaScript is a dynamic language.  A variable can be reassigned to different types.
// Typeof Operator
console.log(typeof(vehicleYear));  // number - JS only has one # type (some languages use int and float)
vehicleYear = '2023'
console.log(typeof(vehicleYear));  // string

// ------------------------------------------------------------------------------------------------------- //
// Reference Types
//  Object, Array, & Functions

// Objects:  Utilize when there are multiple related variables
//  Reference object and not individual variables, makes code cleaner.
let vehicle1 = {      // Object Literal {}
    year: 2023,       // Key:Value Pairs
    make: 'Tesla',    // year, make and model are properties of the vehicle1 object.
    model: 'Model Y'
};
console.log(vehicle1.year);      // Uses Dot Notation to read value of property
console.log(vehicle1['make']);   // Uses Bracket Notation
console.log(vehicle1.model);
console.log(vehicle1);
vehicle1.year = '2024';          // Uses Dot Notation to assign new value and type
vehicle1['model'] = 'Model X';      // Uses Bracket Notation
console.log(vehicle1);

