function isPalindrome(word) {
  // Write your algorithm here 
  // MY ALGORITHM
  // declare isPalindrome function with word as the parameter
  // split the word argument into an array using the split method 
  const splitString = word.split('');
  console.log(splitString)
  // reverse the splitted word using the reverse method 
  const reverseString = splitString.reverse();
  console.log(reverseString)
  // join the reversed word into a string 
  const joinString = reverseString.join('');
  console.log(joinString)
  // use an if statement to see if the reversed string is equal to the entered argument and // return true or false 
  return joinString === word
  }
  isPalindrome('abba')

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I have taken that word, split it into individual letters, reversed the letters
  and then joined the letters into a word. 
  I have then used an if statement to compare if the reversed word is the 
  same as the initial word
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
