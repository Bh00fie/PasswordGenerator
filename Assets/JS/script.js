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

var lowercaseCharacter;
var uppercaseCharacter;
var numericCharacter;
var specialCharacter;
// Empty variable is created as this will be filled up depending on the user boolean response
var selectedCharacters = [];

// ----------- 

// Function to prompt user for password options
function getPasswordOptions() {
  // We start asking the user how long does he wants the password to be
  characterLength = prompt("How many character?");
  // We check if the user input is correct, if a letter is not being used the user should try again, this can be done by checking IF the input is not a number, IF it is a number, proceed to go ahead with other questions
  if (isNaN(characterLength)) {
    alert("The input is not a number, please try a number between 10 and 64")
    getPasswordOptions();
  } else {
    if (characterLength < 10) { // A single if statement could have been used for numbers outside the defined range but separating gives the user more information of where he did wrong 
      alert("Length selected is not lower than 10, please try again something higher");
      getPasswordOptions();
    } else if (characterLength > 64) {
      alert("Length selected is not above than 64, please try again something lower");
      getPasswordOptions();
    } else { //At this point, the input is correct and we proceed to take information of how the user wants his password to be
      lowercaseCharacter = confirm("Do you want Lowercase characters");
      uppercaseCharacter = confirm("Do you want Uppercase characters");
      numericCharacter = confirm("Do you want Numeric characters");
      specialCharacter = confirm("Do you want Special characters");
      // In case user decided to not have any type of character, this is not possible so code will alert the user and ask again to chose a password
      if (!lowercaseCharacter && !uppercaseCharacter && !numericCharacter && !specialCharacter) {
        alert("You must select at least one character type.");
        getPasswordOptions();
      }
      // The following IF statements will be used to create an array from the user input, if the condition is left by itself, JS runs the code if only the stored variable is "true", therefore if the user selects true for any of the wanted type of character in the password, their array will be added to "selectedCharacter" (Concat is used to do so), this will be used in the "getRandom function" to get a random character
      if (lowercaseCharacter) {
        selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
      }
      if (uppercaseCharacter) {
        selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
      }
      if (numericCharacter) {
        selectedCharacters = selectedCharacters.concat(numericCharacters);
      }
      if (specialCharacter) {
        selectedCharacters = selectedCharacters.concat(specialCharacters);
      }
    }
  }
}

// getPasswordOptions()
// Function for getting a random element from an array
function getRandom(arr) {
  // Using the following nested function we take an array as input and output a random character, what we are looking for to use in this function is to get a random character from the array created by the user
  return arr[Math.floor(Math.random() * arr.length)];
};
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var generatedString = ""; // The generated string
  // This while loop will add single character to generatedString as many as the user defined as password lenght
  while (generatedString.length < characterLength) {
    var randomCharacter = getRandom(selectedCharacters);
    generatedString += randomCharacter;
  }
  console.log(selectedCharacters);
  return generatedString; // Outputs a string of characters based on the user's chosen length
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// writePassword()
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);