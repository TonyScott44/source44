// Linear Search

/* Given an unsorted array that contains all the us states, the simplest way to search for a value is
   to look at every element in the array and check if it's the value we want */

const unsortedStates = [
    "Montana", "Texas", "Alabama", "Ohio", "Georgia", "Vermont", "Colorado", "Nevada", 
    "Hawaii", "New Mexico", "Illinois", "Kansas", "Wyoming", "Oregon", "South Dakota", 
    "North Carolina", "Missouri", "Arkansas", "West Virginia", "Louisiana", "Maine", 
    "Alaska", "Utah", "Indiana", "Tennessee", "California", "Kentucky", "Michigan", 
    "Connecticut", "Idaho", "Rhode Island", "Arizona", "Washington", "Wisconsin", 
    "Delaware", "Oklahoma", "Massachusetts", "New Jersey", "Minnesota", "Virginia", 
    "Florida", "Nebraska", "New Hampshire", "North Dakota", "South Carolina", 
    "New York", "Iowa", "Pennsylvania", "Maryland", "Mississippi"
];

/* In JavaScript, methods such as indexOf, includes, find, and findIndex uses the logic above behind 
   the scenes, which entails Linear Search */
console.log(unsortedStates.indexOf("Georgia"));     // 4

console.log(unsortedStates.includes("California")); // true

const homeState = (el) => el === "Louisiana";
console.log(unsortedStates.find(homeState));        // Louisiana

const vacayState = (el) => el === "Hawaii";
console.log(unsortedStates.findIndex(vacayState));  // 8

const linearSearch = (arr,target) => {
    for(let i = 0;i < arr.length; i++) 
        if(arr[i] === target) return i;
    return -1; 
}
console.log(linearSearch(unsortedStates,"Colorado")); // 6
console.log(linearSearch(unsortedStates,"CO"));       // -1

// Big O
// Best Case Time Complexity: O(1) Constant (if we find what we're looking for right away which is rare)
// Worst Case Time Complexity: O(n) Linear
// Average Case Time Complexity: O(n) Linear