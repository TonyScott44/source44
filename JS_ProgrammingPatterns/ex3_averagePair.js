/* Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals 
the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

*/

const averagePair = (arr,num) => {
    let p1 = 0, p2 = arr.length-1;
    if(arr.length === 0) return false;
    while(p1 < arr.length){
        let avg = arr[p1] + arr[p2] / 2;
        if(p2 !== p1){
            if(avg === num) return true;
            p2--;
        } else
        if(p2 === p1){
            p1++;
            p2 = arr.length-1;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5));               // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));  // true
console.log(averagePair([-1,0,3,4,5,6], 4.1));       // false
console.log(averagePair([],4));                      // false