// Control Flow

// Conditional Statements

// If...else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is betweem 12pm and 6pm:  Good afternoon!
// Otherwise: Good evening!

// Brute Force
greeting = (time) => {
    if(time <=  1159 && time >= 600 ) console.log('Good morning!');
    else if(time >= 1200 && time <= 1759) console.log('Good afternoon!');
    else if(time <= 559) console.log('Why are you calling me this early!');
    else (console.log('Good evening!'));
}

greeting(500);
greeting(1159);
greeting(1200);
greeting(1759);
greeting(1800);
greeting(130);
greeting(2359);

// Switch...case
let role = 'guest';
switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Role Undefined');
}

/* If Statements + Switch Cases Output
Why are you calling me this early!
Good morning!
Good afternoon!
Good afternoon!
Good evening!
Why are you calling me this early!
Good evening!
Guest User */

/* Loops
For
While
Do...while
For...in
For...of
*/


// For Loop
for(i = 50;i > 0;i-=10) 
    console.log(i);
/* Output
50
40
30
20
10
*/

// While Loop
let w = 0;
while(w != 7){       // Loop variables are included in while loops, not in do...while
    console.log(w);
    w = Math.floor(Math.random() * 10);
}
/* Output (Random)
0
3
8
9
8
3
8
0
6
*/
//Do While Loop       // Difference between while & do...while loops is that do...while
let dw = 4;                // will always execute at least once, even if the while conditon
do{                   // is false.  While loops on the other hand will not execute if the 
    console.log(dw);   // while condition is false.
    dw++;
} while(dw < 4) dw++;
/* Output
4
*/
dw2 = 0;                
do{                    
    console.log(dw2);   
    dw2++;
} while(dw2 < 4) dw2++;
/* Output
0
1
2
3
*/
// 'for in'': Used to iterate through objects.  This also works with arrays but ES6
//            introduced the 'for of' loop, which is better suited for arrays.
let atlSports = {
    football: 'Falcons',
    baseball: 'Braves',
    basketball: 'Hawks',
    soccer: 'United'
};
for(key in atlSports){
    console.log(`Atlanta's ${key} team.... the Atlanta ${atlSports[key]}! `)
}
/* Output
Atlanta's football team.... the Atlanta Falcons! 
Atlanta's baseball team.... the Atlanta Braves! 
Atlanta's basketball team.... the Atlanta Hawks! 
Atlanta's soccer team.... the Atlanta United!
*/

// 'for of'': Used to iterate through arrays.
let arr = [1,2,3,4,5];
for (let el of arr) console.log(el);
/* Output
1
2
3
4
5
*/

// Break Statement: Breaks out of a loop
let breaker = 40;
for(let i = 44;i > 0;i--){   // i = loop variable | i = 44 is the initial expression
    console.log(i);      // i > 0 is the condition | i-- = Increment or Decrement Expression
    if(i === breaker) break;
} 
/* Output
44
43
42
41
40
*/
// Continue Statement: Immediately starts the next iteration of a loop
let cities = ['Honolulu', 'Miami', 'Los Angeles', 'Atlanta'];
for(el of cities){
    if(el === 'Miami') continue;
    console.log(el);
}
/* Output
Honolulu
Los Angeles
San Francisco
*/