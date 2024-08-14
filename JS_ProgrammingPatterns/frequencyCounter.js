/* Frequency Counter
    This pattern uses objects or sets to collect values/frequencies of values.
    This can often eliminate the need for nested loops or O(N^2) quadratic operations 
    with arrays / strings.
*/

/* Ex. Write a function called same, which accepts two arrays. The function should return 
   true if every value in the array has it's corresponding value squared in the second array. 
   The frequency of values must be the same.
*/

console.log("SAME");
same = (arr1,arr2) => {
    if(arr1.length !== arr2.length){ // If the length of both array's aren't equal...
        return false;                // return false.
    }
    let frequencyCounter1 = {};     // Declare an object for each array respectively
    let frequencyCounter2 = {};
    for(val of arr1){               // Add values+frequencies to the objects
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }
    for(val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }
    for(let key in frequencyCounter1){   // Loop through the 
        if(!(key ** 2 in frequencyCounter2)){ // If there's no match
            return false;                     // return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){  // If the frequencies are 
            return false;                                            // different, return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;  // At this point, all test cases have passed.  Return True
}

console.log(same([1,2,3],[4,1,9]));    // true
console.log(same([1,2,3],[1,9]));      // false
console.log(same([1,2,1],[4,4,1]));    // false (must be same frequency)

/* Anagrams
   Given two strings, write a function to determine if the second string is an anagram of the first. 
   An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
   formed from iceman.
*/
console.log("ANAGRAMS");
let validAnagram = (str1,str2) => {
    // Edge case: check if strings are the same length
    if(str1.length !== str2.length) return false;
    // Store strings in objects
    let obj1 = {}, obj2 = {};
    for(let val of str1) obj1[val] = (obj1[val] || 0) + 1;
    for(let val of str2) obj2[val] = (obj2[val] || 0) + 1;
    // Loop through and compare keys and frequencies
    for(let key in obj1){
        if(!(key in obj2)) return false;
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(validAnagram('','')); // true
console.log(validAnagram('aaz','zza')); // false
console.log(validAnagram('anagram','nagaram')); // true
console.log(validAnagram('rat','car'));  // false
console.log(validAnagram('awesome','awesom')); // false
console.log(validAnagram('qwerty','qeywrt')); // true
console.log(validAnagram('texttwisttime','timetwisttext')); // true