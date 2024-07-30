/* Multiple Pointers
    Creating pointers or values that correspond to an index or position and move
    towards the beginning, end or middle based on a certain conditon.  This is very 
    efficient for solving problems with minimal space complexity as well.  
*/

/* Ex. Write a function called sumZero which accepts a sorted array of integers.
       The function should find the first pair where the sum is 0. Return an array 
       that includes both values that sum to zero or undefined if a pair does not exist.
*/
console.log('Sum Zero');
let sumZero = arr => {
    let left = 0, right = arr.length -1, sum = 0;
    while(left < right){   // While left < right stops pointers from landing on 0 at the same time
        sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        if(sum > 0) right--;
        else left++
    }
    return undefined;
}
console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3]
console.log(sumZero([-2,0,1,3]));         // undefined
console.log(sumZero([1,2,3]));            // undefined
/*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique 
    values in the array. There can be negative numbers in the array, but it will always be sorted.
*/
console.log('Count Unique Values');
let countUniqueValues = arr => {
    let ptr1 = 0, ptr2 = 1, unique = 0;
    while(ptr1 < arr.length){
        if(arr[ptr1] !== arr[ptr2]){
            unique++;
            ptr1 = ptr2;
            ptr2 = ptr1 + 1;
        } else ptr2++;  
    }
    return unique;
}
console.log(countUniqueValues([1,1,1,1,1,2]));                  // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));     // 7
console.log(countUniqueValues([]));                             // 0
console.log(countUniqueValues([-2,-1,-1,0,1]));                 // 4

// Now solve it without using a counter
console.log('Count Unique Values: Without Counter');
let countUniqueValues2 = arr => {
    let ptr1 = 0, ptr2 = 1;
    while(ptr1 < arr.length){
        if(arr[ptr1] !== arr[ptr2]){
            ptr1++;
            ptr2++;
        } else{
            arr.splice(ptr2,1);
        }   
    }
    return arr.length;
}
console.log(countUniqueValues2([1,1,1,1,1,2]));                  // 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]));     // 7
console.log(countUniqueValues2([]));                             // 0
console.log(countUniqueValues2([-2,-1,-1,0,1]));                 // 4