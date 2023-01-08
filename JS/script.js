// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// ----------- 
// Function to prompt user for password options
function getPasswordOptions() {

// We start asking the user how long does he wants the password to be
var characterLength = prompt("How many character?"); 

// We check if the user input is correct, if a letter is not being used the user should try again, this can be done by checking IF the input is not a number, IF it is a number, proceed to go ahead with other questions
if (isNaN(characterLength)) {
  alert("The input is not a number, please try a number between 10 and 64")
  getPasswordOptions();
} else {
  if (characterLength < 10) { // A single if statement could have been used for numbers outside the defined range but separating gives the user more information of where he did wrong 
    alert ("Length selected is not lower than 10, please try again something higher");
    getPasswordOptions();
  } else if (characterLength > 64) {
    alert ("Length selected is not above than 64, please try again something lower");
    getPasswordOptions();
  } else { //At this point, the input is correct and we proceed to take information of how the user wants his password to be
      var lowercaseCharacter = confirm("Do you want Lowercase characters");
      var uppercaseCharacter = confirm("Do you want Uppercase characters");
      var numericCharacter = confirm("Do you want Numeric characters");
      var specialCharacter = confirm("Do you want Special characters");
    }
}

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);