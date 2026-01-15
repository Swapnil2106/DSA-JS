//242. Valid Anagram

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//Example 1:
//Input: s = "anagram", t = "nagaram"
//Output: true

//Example 2:
//Input: s = "rat", t = "car"
//Output: false

//Constraints:
//1 <= s.length, t.length <= 5 * 104
//s and t consist of lowercase English letters.





//---------------------------------------------Brute Force code
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    else {
        var newS = s.split('').sort().join('');
        var newT = t.split('').sort().join('');

        if (newS === newT)
            return true;
        return false;
    }

};






//---------------------------------------------Optimized Code
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length)
        return false;
    else {
        const count = {};
        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if (!count[char])
                return false;
            count[char]--;
        }
        return true;
    }
};