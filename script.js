// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password, Array of numeric characters to be included in password, Array of lowercase characters to be included in password, Array of uppercase characters to be included in password
var numbericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar =["@","%", "+", "\\", "/", "'", "!", "#", "$", "^", "?",":", ",", ")", "(", "}","{", "]", "[", "~","-", "_", ".",];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variable declaration
var confirm;
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  alert("Password must contain minimum 8 characters?")
  
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 20) {
      alert("Password length must be between 8-20 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // Determine parameters of password 
    var confirmUpperCase = confirm("Would you like to include uppercase characters");
    var confirmLowerCase = confirm( "Would you like to include lowercase characters");
    var confirmSpecialCharacter = confirm(" Would you like to include special characters");
    var confirmNumericCharacter = confirm(" Would like to include numeric characters");    
    
    
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmUpperCase = confirm("Would you like to include uppercase characters");
    var confirmLowerCase = confirm( "Would you like to include lowercase characters");
    var confirmSpecialCharacter = confirm(" Would you like to include special characters");
    var confirmNumericCharacter = confirm(" Would like to include numeric characters");    
    
    } 

      //  password parameters 
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numbericChar)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Function for getting a random element from an array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}







