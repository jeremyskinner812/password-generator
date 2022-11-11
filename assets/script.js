// global variables to makeup password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseLetter = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCaseLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', "'", ')', '_', '-', '=', '+', '/', '?', '>', '<', ';', ':', '=', '"', '[', ']', '{', '}', '|', '`', ',', '.']; 

// function to gather what user choices for password
function passwordOptions() {
  var length = parseInt(
    window.prompt('How long would you like your password to be? Choose a number between 8 and 128.'), 10
  );
// function to return int from string input for length

// conditionals to meet parameters for password length
  if (length < 8) {
    window.alert("Please choose a number between 8 and 128");
    return null;
  };

  if (length > 128) {
    window.alert("Please choose a number between 8 and 128");
    return null;
  };

  if (isNaN(length)) {
    window.alert("Please choose a number between 8 and 128");
    return null;
  }
// windows to confirm user choices
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
  );

// conditional to make sure at least one option is chosen
  if (includeNumbers === false && includeLowerCase === false && includeUpperCase === false && includeSpecialKeys === false
    
    ){
    window.alert("Must choose at least One option for password");
    return null;
  };

// object to gather user inputs
  var userInputs = {
    length: length,
    includeNumbers: includeNumbers,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeSpecialKeys: includeSpecialKeys,
  };
  console.log(userInputs);
  return userInputs;
  
}

// function to randomize characters
function randomize(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[index];
  return randomCharacter;

}

// function to generate password 
function generatePassword() {
  var userOptions = passwordOptions();
  var includedOptions = [];
  var otherChars= [];
  var passwordItems = [];

  // if statements to include what user chose based on boolean values
  if (userOptions.includeNumbers) {
    otherChars = otherChars.concat(numbers);
    includedOptions.unshift(randomize(numbers));
  }

  if (userOptions.includeUpperCase) {
    otherChars = otherChars.concat(upperCaseLetter);
    includedOptions.unshift(randomize(upperCaseLetter));
  }

  if (userOptions.includeLowerCase) {
    otherChars = otherChars.concat(lowerCaseLetter);
    includedOptions.unshift(randomize(lowerCaseLetter));
  }

  if (userOptions.includeSpecialKeys) {
    otherChars = otherChars.concat(specialKeys);
    includedOptions.unshift(randomize(specialKeys));
  }

  // for loops to iterate and fill password
  for (var i = 0; i < userOptions.length; i++) {
    var otherChar = randomize(otherChars);
    passwordItems.unshift(otherChar);
  }

  for (var i = 0; i < includedOptions.length; i++) {
    passwordItems[i] = includedOptions[i];
  }
// join items from array into a string
  return passwordItems.join('');



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

