/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the original cleaned string is the same as the reversed string
  return cleanedStr === reversedStr;

}

module.exports = isPalindrome;
