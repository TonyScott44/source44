// Write a function that takes two numbers and returns the maximum of the two.
max2 = (n1,n2) => {
    return n1 > n2 ? n1 : n2;
}
console.log(max2(100,44)); // Output: 100
console.log(max2(100,500)); // Output: 500
//=========================================================================================
// Write a function that takes in the width and height of a media document 
// and returns its orientation
getOri = (width,height) => {
    return width < height ? 'portrait' : 'landscape';
}
console.log(getOri(5,6)); // Output: portrait
console.log(getOri(5,3)); // Output: landscape
//=========================================================================================
// FizzBuzz
// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'
fizzBuzz = num => {
    if(num % 3 === 0 && num % 5 !== 0) return 'Fizz';
    else if(num % 5 === 0 && num % 3 !== 0) return 'Buzz';
    else if(num % 3 === 0 && num % 5 === 0) return 'Fizz Buzz';
    else return num;
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz(354183763284834));
//=========================================================================================
/* Speed Trap
    Speed Limit = 70
    5 -> point
    Math.floor(1.3)
    12 points = License Suspended
*/
speedTrap = speed => {
    if(speed >= 130) return 'License Suspended';
    else if(speed <= 74) return 'Ok';
    else{
        let points = Math.floor((speed - 70) / 5);
        return `Points: ${points}`;
    }
}
console.log(speedTrap(65));
console.log(speedTrap(74));
console.log(speedTrap(75));
console.log(speedTrap(129));
console.log(speedTrap(130));
console.log(speedTrap(152));