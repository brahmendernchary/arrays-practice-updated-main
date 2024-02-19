function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

isPalindrome("Madam, I'm Adam");

//method 2
// program to check if the string is palindrome or not

function checkPalindrome(string) {
  // convert string to an array
  const arrayValues = string.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

//take input
const string = prompt("Enter a string: ");

checkPalindrome(string);