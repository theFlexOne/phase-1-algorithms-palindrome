function isPalindrome(word) {
  if (word === "" || word === undefined) return "please enter word";
  if (typeof word !== "string") return "word MUST be a string";
  let i = 0, 
      j = word.length -1, 
      wordCopy = word.toLocaleLowerCase();
  while (i < j) {
    if (wordCopy[i] !== wordCopy[j]) return false;
    i++; j--;
  }
  return true;
}

/*
-> this is my second attempt. first attempt is below this block comment.

pseudo-code:
  -> define 2 variables, one pointing to the first character index and one pointing to the last character index in the word.
  -> to account for words that contain both upper and lower case letters, create a copy of the word equal to word.toLowerCase().
  -> loop through the word, making sure the first and last character are equal.
    -> if not equal, return false
    -> increment one index variable by one and decrement the other by one.
  -> if loop ends without returning, return true

  explanation:
  -> I think this way is twice as fast.
    -> a word of length 5 or 6 takes only 3 iterations.
    -> a word of length 55 or 66 takes only 33 iterations.
    -> and so on.
  -> I took advantage of the fact that the first and last letters must be equal, as well as, the second and second-to-last letters, and so on.
    -> if ever they weren't equal, i terminated the loop early by simply returning false.
    -> once they met in the middle of the word, i ended the loop and returned true
*/

/*
function isPalindrome(word) {
  if (word === "" || word === undefined) return "please enter word";
  if (typeof word !== "string") return "word MUST be a string"
  const characters = [];
  for (let i = word.length-1; i >= 0; i--) characters.push(word[i]); // <--iterating backwards
  // for (let i = 0; i < word.length; i++) characters.unshift(word[i]); // <--iterating forwards
  const reversedWord = characters.join('');
  return word.toLowerCase() === reversedWord.toLowerCase();
}
*/

/*
pseudo-code:
  1) iterate through the word, forwards or backwards.
  2) create a new array with each letter as an element, essentially reversing the string.
  3) return the equality of the original word and the new array, after calling the join method, of course.

  *) call toLowerCase on word and reversedWord when checking equality

  checking for errors:
  1) return a message if word is undefined or an empty string
  2) return a message if word is not a string type

explanation:
  I needed a way to reverse the characters in the word, so I used a simple for loop, instead of splitting the word and using forEach,
    because strings have indices.
  I iterated through the word backwards, pushing each letter to a new array, essentially reversing the string.
  I decided to create a new const for the reversed word, instead of returning the array with a join method, for readability.
  I then returned the equality of the original word and the reversed word.
  I dealt with an empty string or undefined by returning a message asking user to enter a word.
  I dealt with number types, and any other types.
  While thinking about edge cases, I realized I should call toLowerCase on word and reversedWord when checking their equality.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Eye"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ball"));

  console.log("");

  console.log("Expecting: please enter word");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: please enter word");
  console.log("=>", isPalindrome());

  console.log("");

  console.log("Expecting: word MUST be a string");
  console.log("=>", isPalindrome(1221));

  console.log("");

  console.log("Expecting: word MUST be a string");
  console.log("=>", isPalindrome(["racecar"]));
}

module.exports = isPalindrome;
