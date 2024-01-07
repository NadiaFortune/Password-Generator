// Array of special characters to be included in password
var choiceArr = []  
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var characterLength = 8

/// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = []
  characterLength = prompt("How many characters do you want your password to be? (Choose between 8 and 128)")

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please make sure length is a number between 8 and 128. Please try again")
    return false
  }

  if(confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  if(confirm("Would you like to use uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCasedCharacters);
}
  if(confirm("Would you like to use special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacters);
}
  if(confirm("Would you like to use numbers in your password?")) {
    choiceArr = choiceArr.concat(numericCharacters);
}    
    return true
}

// Function to generate password with user input and get random element from an array
function generatePassword() {
    var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
    return password
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions();

  if (correctPrompts) {
    
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);