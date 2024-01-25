/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    var s = ['a', 'e', 'i', 'o', 'u']
    
    const count = Array.from(str).filter(char => s.includes(char)).length;
    return count;
}

module.exports = countVowels;