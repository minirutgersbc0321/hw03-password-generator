// Array of special characters to be included in password
var specialCharacters = ["@","%", "+", "\\", "/", "'", "!", "#", "$", "^", "?",":", ",", ")", "(", "}","{", "]", "[", "~","-", "_", ".",];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ "a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u","v", "w","x", "y","z"];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Function to prompt user for password options
function yourFuncForUserInput() {
  // 1. Variable to store length of password from user input
  //
  // 2. Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  //
  // 3. Variable to store boolean regarding the inclusion of special characters
  //
  // 4. Variable to store boolean regarding the inclusion of numeric characters
  //
  // 5. Variable to store boolean regarding the inclusion of lowercase characters
  //
  // 6. Variable to store boolean regarding the inclusion of uppercase characters
  //
  // 7. Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  //
  // 8. Object to store user input
  //
  // 9. return user-input-object
}

// Function for getting a random element from an array
function yourFuncForRandomChar(arr) {
  // 1. Generate random number range from 0 to (arr.length - 1)
  //
  // 2. Variable to store the element in arr usiong random number as index
  //
  // 3. return random elment in arr
  //
}

// Function to generate password with user input
function generatePassword() {
  //
  // DATA STRUCTURE
  //
  // 1. Varialable to store user input object by calling yourFuncForUserInput
  //
  // 2. An empty array for result to store password as it's being concatenated later
  //
  // 3. Array to store all eligible/possible characters of different types based on by user input
  //
  // 4. Array to contain one of each type of chosen character to ensure each will be used and guaranteed
  //
  // MAIN LOGIC
  //
  // 1a. Conditional statement that adds array of special characters into array of possible characters based on user input
  // 1b. Push new random special character to guaranteedCharacters
  //
  // 2a. Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // 2b. Push new random special character to guaranteedCharacters
  //
  // 3a. Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // 3b. Push new random lower-cased character to guaranteedCharacters
  //
  // 4a. Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // 4b. Push new random upper-cased character to guaranteedCharacters
  //
  // 5. For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  //
  // 6. Mix in at least one of each guaranteed character in the result
  //
  // 7. Transform the result into a string and pass into writePassword and return it to the caller
  //
}

//
// Call back function to write password to the #password iuput
function writePassword() {
  // 1. Call YourFuncToGeneratePwd
  var password = generatePassword();

  // 2. Grab #password html tag
  var passwordText = document.querySelector("#password");

  // 3. Update the value of the tag
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
