/* Sliding Window
    - Involves creating a window which can either be an array or number from one position to another
    - Depending on a certain condition, the window either increases or closes (and a new window is created)
    - Very useful for keeping track of a subset of data in an array/string etc
*/

/* Example: maxSubarraySum
    Write a function called maxSubarraySum which accepts an array of integers and a number called n. The
    function should calculate the maximum sum of n consecutive elements in the array.
*/
// My Naive Solution
let maxSubarraySum = (arr,n) => {
    if(n > arr.length || arr.length === 0 || n < 1) return null;
    if(n === 1) return Math.max(...arr);
    let sum, tmpArr = [], left = 0, right = n-1, maxSum = 0;
    while(right < arr.length - 1){
        sum = 0;
        for(let i = left;i <= right;i++) sum += arr[i];
        if(maxSum < sum) maxSum = sum;
        left++;
        right++;
        if(arr.length === right + 1) break;
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySum([4,2,1,6],1));       // 6
console.log(maxSubarraySum([4,2,1,6,2],4));     // 13
console.log(maxSubarraySum([],4));              // null

// My Sliding Window Solution
let maxSubarraySum_sw = (arr, num) => {
    let ms = 0, ts = 0;
    for(let i = 0;i < num;i++){
        ms += arr[i];
        console.log(ms);
    }
    ts = ms;
    for(let i = num;i < arr.length;i++){
        ts = ts - arr[i-num] + arr[num];
        ms = Math.max(ms,ts);
        console.log(ms);
    }
    return ms;
}
console.log(maxSubarraySum_sw([8,1,3,0,2],2));