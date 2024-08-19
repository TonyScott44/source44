"use strict"
// Objects 
// - Collection of key:value pairs
// - Groups related variables
// - Encapsulates variables within, including functions
// - Witin an object, variables are referred to as properties
//   and functions are referred to as methods.

// Non Object Approach (less efficient)
let radius = 1;
let x = 1;
let y = 1;
let draw = () => {};
let move = () => {};

// These variables and functions all relate to each other (specs + behaviors of a circle).
// Grouping these into an object would be a better approach.
const circle = { // Object literal
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: () => {
        console.log('draw');
    },
    move: () => {
        console.log('move');
    }
};
circle.draw();
console.log(circle.location);
console.log(circle.isVisible);

/* Utilizing objects in this way is known as Object Oriented Programming (OOP).
   OOP is a style of programming where we see a program as a collection of 
   objects that talk to each other to perform some functionality.
*/ 

/* As programs get more complex and the # of objects grow, the object literal becomes 
   the least efficient way to create objects.
*/

// Imagine that we want to create a second circle object by copying/pasting the first one.
const circle2 = { 
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: () => {
        console.log('draw');
    },
    move: () => {
        console.log('move');
    }
};

/* At this point, we have duplicated the draw and move methods.  That's a problem.
   If an object has multiple methods, we probably wouldn't want all that 
   logic in the second circle.  Also, if there are any bugs in the logic, we wouldn't
   want to replicate faulty code as well.
*/

/* When our objects contain logic, it's better to use factories or constructor functions 
   to create new objects.
*/

// Factory Functions: Just like factories produce products, factories in JS produce objects
// - Note: The naming convention for factory functions uses Camel notation (starting with the second word, capitalize every 1st letter of a word)

let createCircle = (radius) => {       // Instead of hardcoding the property values, pass in arguments/parameters
    return {                   
        radius,  // In modern JS, if the key and the value are the same ex.'radius: radius', you can change
        draw() {    // it to just 'radius'.  Also in modern JS, methods don't have to use the key value pair syntax ex. 'draw: () => {}'
            console.log('draw');   // You can just use 'draw {}'
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

/* With the above logic, the method 'draw' is defined only once within the factory function, unlike before where it was defined multiple times.
   This is a more efficient and less error prone approach.  If there's a bug in the method, we only need to modify one single method, not multiple.
*/

// Constructor Functions: Constructs/creates an object
// - In JS, objects are dynamic, we can always add additional properties or methods to them.
// - Note: The naming convention for constructor functions uses Pascal notation (starting with the first word, capitalize every 1st letter)

// Instead of returning an object, we're going to use a different approach to initialize an object.
function Circle(radius) {
    this.radius = radius    // In JS, the keyword 'this' refers to the object that is executing this piece of code.
    this.draw = () => {
        console.log('draw');
    }
    // return this; No need for a return statement here. The return will automatically happen because of the nature of the constructor function ('this' logic). 
}

let circleA = new Circle(1); // Create an object based on the constructor function
/* 
    When the new operator is used, 3 things happen...................
    1. It creates an empty JS object ex. 'const x = {};'.
    2. Next, it sets 'this' to point to the empty object. (Also, new properties & methods are set.)
    3. Finally, new object is returned from the constructor function.
*/
console.log(circleA);
// With factory and constructor functions, it's all about preference.  Don't spend a lot of time figuring out
// which one is best. 

