////// NEETCODE ARRAYS & HASHING #2 EASY

// Hash Map - Frequency Counter
// Time O(N) | Space O(N)
// https://leetcode.com/problems/valid-anagram/


var isAnagram = function(s, t) {
  // make sure they are the same length
  if (t.length !== s.length){
       return false;
    } else if (t === s) {
        return true;
    }
    // check how many times each letter appears
    let freq1 = {};
    let freq2 = {};

    for(let char of t) {
      freq1[char] = (freq1[char] || 0) + 1;
    }
     for(let char of s) {
      freq2[char] = (freq2[char] || 0) + 1;
    }

    // check letter match
    for(let key in freq1) {
      return freq1[key] !== freq2[key] ? false : true;
    }
  };
