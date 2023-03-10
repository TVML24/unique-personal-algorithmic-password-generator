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


// make an object called characters that contains the four keys which will contain all of the values to be used for the generator. e.g. lowercase: [a, b, c] uppercase: [A, B, C]
const character = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  specialCharacters: [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ",", "^", "_", "`", "|", "~"]
};

// create an empty variable called passwordHolder
var passwordHolder = "";

// Generate Password Function
var generatePassword = function() {
// when the user clicks the generate button a prompt appears that asks for the length of the password
// this number is stored as var passwordLength
// this includes a validity check to make sure that it is more than 8 characters, but less than 129 characters (should be 128)
  var passwordLength = prompt("How many characters should the password be? 8-128");
    if ((!passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
      alert("The number of characters must be between 8 and 128");
    } else {
// confirm box appears and prompts the user if it will include lowercase characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false
      var includeLowercase = confirm("Should the password include lowercase characters?");
// confirm box appears and prompts the user if it will include uppercase characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false
      var includeUppercase = confirm("Should the password include uppercase characters?");
// confirm box appears and prompts the user if it will include numeric characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false
      var includeNumeric = confirm("Should the password include numeric characters?");
// confirm box appears and prompts the user if it will include special characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false
      var includespecialCharacters = confirm("Should the password include special characters?");
// needs a validity check to make sure that at least one set of characters has been selected
      if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === false) && (includespecialCharacters === false)) {
        alert("You haven't selected any character sets!");
// checks which values are to be used using true/false checks
// single character sets
      } else if ((includeLowercase === true) && (includeUppercase === false) && (includeNumeric === false) && (includespecialCharacters === false)){
// uses a random number to select one of the possible characters
// start for loop until i > password length
          for (var i = 0, n = character.lowerCase.length; i < passwordLength; ++i) {
           passwordHolder += character.lowerCase[(Math.floor(Math.random() * n))];
           }
// when the password has finished being generated it is presented in an alert OR returned to the writePassword function
          return passwordHolder;
      } else if ((includeLowercase === false) && (includeUppercase === true) && (includeNumeric === false) && (includespecialCharacters === false)){
          for (var i = 0, n = character.upperCase.length; i < passwordLength; ++i) {
            passwordHolder += character.upperCase[(Math.floor(Math.random() * n))];
            }
           return passwordHolder;
      } else if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === true) && (includespecialCharacters === false)){
          for (var i = 0, n = character.numeric.length; i < passwordLength; ++i) {
            passwordHolder += character.numeric[(Math.floor(Math.random() * n))];
            }
           return passwordHolder;
      } else if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === false) && (includespecialCharacters === true)){
          for (var i = 0, n = character.specialCharacters.length; i < passwordLength; ++i) {
            passwordHolder += character.specialCharacters[(Math.floor(Math.random() * n))];
            }
           return passwordHolder;
      } else if ((includeLowercase === true) && (includeUppercase === true) && (includeNumeric === true) && (includespecialCharacters === true)){
// when two or more characters sets are required they must be combined using the concat method prior to compiling the password
// all character sets
          var characterHolder = character.lowerCase.concat(character.upperCase, character.numeric, character.specialCharacters);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
           return passwordHolder;
//groups of three character sets
      } else if ((includeLowercase === true) && (includeUppercase === true) && (includeNumeric === true) && (includespecialCharacters === false)){
          var characterHolder = character.lowerCase.concat(character.upperCase, character.numeric);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === true) && (includeUppercase === true) && (includeNumeric === false) && (includespecialCharacters === true)){
          var characterHolder = character.lowerCase.concat(character.upperCase, character.specialCharacters);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === true) && (includeUppercase === false) && (includeNumeric === true) && (includespecialCharacters === true)){
          var characterHolder = character.lowerCase.concat(character.numeric, character.specialCharacters);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === false) && (includeUppercase === true) && (includeNumeric === true) && (includespecialCharacters === true)){
          var characterHolder = character.upperCase.concat(character.numeric, character.specialCharacters);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
// pair groupings with lowerCase Set
      } else if ((includeLowercase === true) && (includeUppercase === true) && (includeNumeric === false) && (includespecialCharacters === false)){
          var characterHolder = character.lowerCase.concat(character.upperCase);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === true) && (includeUppercase === false) && (includeNumeric === true) && (includespecialCharacters === false)){
          var characterHolder = character.lowerCase.concat(character.numeric);
          for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === true) && (includeUppercase === false) && (includeNumeric === false) && (includespecialCharacters === true)){
          var characterHolder = character.lowerCase.concat(character.specialCharacters);
            for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
// pair groupings with upperCase set 
      } else if ((includeLowercase === false) && (includeUppercase === true) && (includeNumeric === true) && (includespecialCharacters === false)){
          var characterHolder = character.upperCase.concat(character.numeric);
            for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      } else if ((includeLowercase === false) && (includeUppercase === true) && (includeNumeric === false) && (includespecialCharacters === true)){
          var characterHolder = character.upperCase.concat(character.specialCharacters);
            for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
// pair groupings with numeric set 
      } else if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === true) && (includespecialCharacters === true)){
          var characterHolder = character.numeric.concat(character.specialCharacters);
            for (var i = 0, n = characterHolder.length; i < passwordLength; ++i) {
            passwordHolder += characterHolder[(Math.floor(Math.random() * n))];
            }
            return passwordHolder;
      }
    }
  }
