"use strict"

/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)
*/
// Solved on 8/13
const sameFreq = (num1,num2) => {
    let tmpStr1 = num1.toString();
    let tmpStr2 = num2.toString();
    let arr1 = [], arr2 = [];
    let obj1 = {}, obj2 = {};

    if(tmpStr1.length !== tmpStr2.length) return false;

    for(let i = 0;i < tmpStr1.length;i++){
        arr1.push(Number(tmpStr1[i]));
        arr2.push(Number(tmpStr2[i]));
    }
    for(let i = 0;i < arr1.length;i++){
        obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
        obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(sameFreq(182,281));           // True
console.log(sameFreq(34,14));             // False
console.log(sameFreq(3589578, 5879385));  // True
console.log(sameFreq(22,222));            // False

// Submission from a few years ago (using frequency counter)
let sameFrequency = (int1,int2) => {

    if(int1.toString().length !== int2.toString().length)return false;
    
    let arr1 = Array.from(String(int1),Number);   // Very handy trick to split an integer into an array of integers
    let arr2 = Array.from(String(int2),Number);
    let obj1 = {};
    let obj2 = {};
    
    arr1.forEach(function(e,index){
        obj1[e] = (obj1[e] || 0) + 1;
    });
    arr2.forEach(function(e,index){
        obj2[e] = (obj2[e] || 0) + 1;
    });

    for(let e in obj1){
        if(obj2[e] === undefined){
            return false;
        } 
        else {
            if(obj1[e] !== obj2[e]){
                return false;
            }
        }
    }
    return true;
};