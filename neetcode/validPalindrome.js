/**
 * Array - Filter && Clone && Reverse
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
/** A phrase is a palindrome if, after converting all uppercase letters into 
* lowercase letters and removing all non-alphanumeric characters, it reads the 
* same forward and backward. Alphanumeric characters include letters and numbers.
* Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // create a new var of s lowercase and space/ symbols removed, 
    // reverse 
    // create another v copy space removed and lower case
    // compare both
    const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '').split("").reverse().join("");
    const oldS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newS == oldS ? true : false
};
