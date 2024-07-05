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
Guest User 
*/