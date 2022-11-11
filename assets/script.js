var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseLetter = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y,' 'z'];

var upperCaseLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y,' 'Z'];

var specialKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', "'", ')', '_', '-', '=', '+', '/', '?', '>', '<', ';', ':', '=' '"', '[', ']', '{', '}', '|', '`', ',', '.'] 

function passwordOptions() {
  var passwordLength = parseInt(
    window.prompt('How long would you like your password to be? Choose a number between 8 and 128.'), 10
  );

  var includeNumbers = window.confirm(
    "Click OK to include numbers in password."
  );

  var includeUpperCase = window.confirm(
    "Click OK to include Uppercase Letters in password."
  );

  var includeLowerCase = window.confirm(
    "Click OK to include Lowercase Letters in password."
  );

  var includeSpecialKeys = window.confirm(
    "Click OK to include Special Characters in password."
  )

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

