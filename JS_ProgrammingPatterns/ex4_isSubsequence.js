/* Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string. In other words, the 
function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

Bonus Constraints:

Time: O(N)

Space: O(1)

*/
// My Naive Approach
const isSubsequence = (str1,str2) => {
    
    let p1 = 0, p2 = 2;
    let hashT = new Set();
    while(p1 !== str1.length-1){
        if(p2 > str1.length){
            p1++;
            p2 = p1 + 1;
        } else {
            hashT.add(str1.substr(p1,p2))
            p2++;
        }
    }
    p1 = 0;
    p2 = 2;
    while(p1 !== str2.length-1){ 
        if(p2 > str2.length){
            p1++;
            p2 = p1 + 1;
        } else {
            if(hashT.has(str2.substr(p1,p2))) return true;
            p2++;
        }
    }
    return false;
}
console.log(isSubsequence('hello', 'hello world'));   // true
console.log(isSubsequence('sing', 'sting'));          // true
console.log(isSubsequence('abc', 'abracadabra'));     // true
console.log(isSubsequence('abc', 'acb'));             // false
console.log(isSubsequence('yo', 'yo'));               // true
console.log(isSubsequence('aaa', "Madam, I'm Adam")); // false
console.log(isSubsequence('Thqckbrwnfxjmpdvrthlzydg', 
    'The quick brown fox jumped over the lazy dog'));  // true