/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let n1 = str1.length;
  let n2 = str2.length;
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  if(n1 != n2){
    return false;
  }
   
  for(let i =0; i<n1; i++){
    
      if(s1[i] != s2[i]){
        return false;
      }
    
  }
  return true;
}

module.exports = isAnagram;
