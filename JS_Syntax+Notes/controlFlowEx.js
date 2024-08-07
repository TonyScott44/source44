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
/* Output
    Ok
    Ok
    Points: 1
    Points: 11
    License Suspended
    License Suspended
*/
//=========================================================================================
/* Even & Odd #s
Write a function that takes a maximum number and displays every number leading up to the
max.  The numbers displayed must also include "EVEN" or "ODD" to the right of the number.
*/
showNumbers = max => {
    let numType;
    for(i = 0;i <= max; i++){
        numType = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, numType);
    }
}
showNumbers(10);
/* Output
    0 EVEN
    1 ODD
    2 EVEN
    3 ODD
    4 EVEN
    5 ODD
    6 EVEN
    7 ODD
    8 EVEN
    9 ODD
    10 EVEN
*/
//=========================================================================================
/* Count Truthy
    Write a function that takes an array of various values & types and returns the
    # of truthy items.
*/
cntTru = arr => {
    let cnt = 0;
    for(el of arr){
        cnt = el ? cnt + 1 : cnt; 
    }
    return cnt;
}
console.log(cntTru([undefined,5,NaN,true,0,false,'','niice!',null])); // Output:3
//=========================================================================================
/* Show Strings
    Write a function that takes in an object and returns its string properties.
*/
const car = {
    year: 2023,
    make: 'Tesla',
    model: 'Model Y',
    performance: true
}
showStrings = obj => {
    console.log(obj);
    for(key in obj){
        if(typeof(obj[key]) === 'string') console.log(key, obj[key]);
    }
}
showStrings(car);
/* Output
    { year: 2023, make: 'Tesla', model: 'Model Y', performance: true }
    make Tesla
    model Model Y
*/
//=========================================================================================
/* Sum of Multiples of 3 & 5
    Write a function that takes a maximum number and adds up all the multiples of 3 & 5
    leading up to the max number
*/
mult35 = max => {
    let sum = 0;
    for(i = 0; i <= max;i++){
        sum = i % 3 === 0 ? sum += i : sum;
        sum = i % 5 === 0 ? sum += i : sum;
    }
    return sum;
}

console.log(mult35(10));  // Output: 33
//=========================================================================================
/* Final Grade  
    Write a function that takes an array of grades and issues a letter Grade based 
    on grade average.
    100 - 90: A
    89  - 80: B
    79  - 70: C
    69  - 60: D
    59  -  0: F
*/
finalGrade = grades => {
    let sum = grades.reduce((acc,curr) => acc + curr);
    let avg = sum / grades.length;
    if(avg >= 90 && avg <= 100) return 'A';
    else if(avg >= 80 && avg <= 89) return 'B';
    else if(avg >= 70 && avg <= 79) return 'C';
    else if(avg >= 60 && avg <= 69) return 'D';
    else return 'F';
}
console.log(finalGrade([80,80,50])); // Output: C
//=========================================================================================
/* Starzy
    Write a function that that takes in a maximum number (rows of stars).  Leading up to 
    the maximum number, each row should display the respective number of stars, incrementing
    the number stars by one for each subsequent row (starting with one).  The end result is
    a display of stars that kind of looks like a half pyramid.
*/
starzy = max => {
    let starray = [];
    for(i = 0;i <= max; i++){
        for(x = 1;x <= i; x++){
            starray.push('*');
        }
        console.log(starray.join(' '));
        starray = [];
    }
}
starzy(20);
/* Output
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
    * * * * * * *
    * * * * * * * *
    * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * * *
    * * * * * * * * * * * *
    * * * * * * * * * * * * *
    * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * * * * * *
    * * * * * * * * * * * * * * * * * * * *
*/
//=========================================================================================
/* Optimus Prime
    Given a maximum number, write a program that displays (on seperate lines) each prime
    number leading up to the given maximum number.
*/
optimusPrime = max => {
   let cnt = 0;
    for(i = 2;i <= max;i++){
        // console.log('Number',i);
        for(x = 1;x <= i; x++){
            if(i % x === 0){
                cnt++;
            } 
            // console.log('Sub#',x);
        }
        if(cnt <= 2) console.log(i);  // 2 as in 1 and the number itself
        // console.log(i, 'count: ' + cnt);
        cnt = 0;
    }
}
optimusPrime(100);
/*
Output
    2
    3
    5
    7
    11
    13
    17
    19
    23
    29
    31
    37
    41
    43
    47
    53
    59
    61
    67
    71
    73
    79
    83
    89
    97
*/