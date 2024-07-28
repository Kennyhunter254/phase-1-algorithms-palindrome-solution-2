function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

  1. Iterate from the beginning of the string to the middle of the string.
  2. For each iteration, calculate the corresponding index from the end of the string.
  3. Compare the character at the current index from the start with the character at the corresponding index from the end.
  4. If any characters do not match, return false.
  5. If all characters match, return true.
*/

/*
  Add written explanation of your solution here

  The function `isPalindrome` checks if a given string is a palindrome. It iterates from the start of the string to the middle, comparing each character with the corresponding character from the end of the string. If all characters match, the function returns true, indicating the string is a palindrome. If any characters do not match, the function returns false, indicating the string is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
