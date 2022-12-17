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

// create an empty variable called passwordHolder

// Generate Password Function

// when the user clicks the generate button a prompt appears that asks for the length of the password
// this number is stored as var passwordLength
// this includes a validity check to make sure that it is more than 8 characters, but less than 129 characters (should be 128)

// confirm box appears and prompts the user if it will include lowercase characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false

// confirm box appears and prompts the user if it will include uppercase characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false

// confirm box appears and prompts the user if it will include numeric characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false

// confirm box appears and prompts the user if it will include special characters returned as boolean variable e.g. var includeLowercase = true or var includeLowercase = false

// needs a validity check to make sure that at least one set of characters has been selected

// checks which values are to be used using true/false checks
// uses a random number to select one of the possible characters
// start for loop until i > password length

// when the password has finished being generated it is presented in an alert OR returned to the writePassword function

// when two or more characters sets are required they must be combined using the concat method prior to compiling the password
// all character sets

//groups of three character sets

// pair groupings with lowerCase Set

// pair groupings with upperCase set 

// pair groupings with numeric set 