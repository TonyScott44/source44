// Divide and Conquer
/*
    This pattern involves dividing a data set into smaller chunks
    an then repeating a process with a subset of data.

    This pattern can tremendously decrease time complexity

    Usually works with arrays, strings, and linkedLists
    Works really well with sorted data
*/

/* An Example:
    Given a sorted array of integers, write a function
    called search, that accepts a value and returns the index 
    where the value passed to the function is located.  If the 
    value is not found, return -1.
*/
 // My Naive Approach
const search1 = (nums,val) => {
    let beg = 0
    let mid = Math.floor((nums.length -1)  / 2);
    let end = nums.length - 1;
    let tmp;

    while(end - beg > 1){
        console.log('beg:',nums[beg],'mid:',nums[mid],'end:',nums[end]);
        if(nums[beg] === val) return beg;
        if(nums[end] === val) return end;
        if(val < nums[mid]){
           end = mid;
        } else 
        if(val > nums[mid]){
            beg = mid;
        } else
        if(val === nums[mid]){
            return mid;
        }   
        tmp = (end - beg) / 2;
        mid = Math.floor(beg + tmp);
    }
    return -1;  
}

// console.log(search1([1,2,3,4,5,6],4))    // 3
// console.log(search1([1,2,3,4,5,6],6))    // 5
// console.log(search1([1,2,3,4,5,6],28))   // -1

// A better solution

const search = (nums,val) => {
    let min = 0, max = nums.length - 1;
    while(min <= max){
        let mid = Math.floor((max + min) / 2);
        let current = nums[mid];
        max = val < current ? mid - 1 : max;
        min = val > current ? mid + 1 : min;
        if(val === current) return mid;
    }
    return -1;
}
console.log(search([1,2,3,4,5,6],4))    // 3
console.log(search([1,2,3,4,5,6],6))    // 5
console.log(search([1,2,3,4,5,6],28))   // -1