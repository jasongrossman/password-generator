// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthCriteria = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*()-/+=.,;:~<>{}[]|";
var selectedCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  }

//generatePassword Function
  var generatePassword = function() {
  
 //clear selectedCharacters so that password generator can be re-used with new criteria
  selectedCharacters = "";

  //password length prompt. Pass user response into length.Criteria. If outside length parameters, give error message and re-prompt.
  var lengthCriteria = window.prompt("How many characters should be in your password? (must be between 8-128");
    if (lengthCriteria >= 8 && lengthCriteria <= 128) {
      console.log("you've chosen " + lengthCriteria + " number of characters");
    }
    else {
      alert("sorry, you must provide a number between 8-128.");
      generatePassword();
    }

  //password character type prompt (lowercase). If confirmed, add it to selectedCharacters, if not, do not add.
    var lowerCaseCriteria = window.confirm("Do you want your password to contain lowercase letters?");
    if (lowerCaseCriteria === true) {
      console.log("yes, include lowercase");
      selectedCharacters = selectedCharacters.concat(lowercase);
    }
    else {
      console.log("no lower case");
      var lowerCaseCriteria = "";
    }

  //password character type prompt (uppercase). If confirmed, add it to selectedCharacters, if not, do not add.
    var upperCaseCriteria = window.confirm("Do you want your password to contain uppercase letters?");
    if (upperCaseCriteria === true) {
      console.log("yes, include uppercase");
      selectedCharacters = selectedCharacters.concat(uppercase);
    }
    else {
      console.log("no uppercase");
      var upperCaseCriteria = "";
    }
  //password character type prompt (numeric). If confirmed, add it to selectedCharacters, if not, do not add.
    var numericCriteria = window.confirm("Do you want your password to contain numbers?");
    if (numericCriteria === true) {
      console.log("yes, include numbers"); 
      selectedCharacters = selectedCharacters.concat(numeric);
    }
    else {
      console.log("no numbers");
      var numericCriteria = "";
    }

  //password character type prompt (special characters). If confirmed, add it to selectedCharacters, if not, do not add. 
    var specialCharCriteria = window.confirm("Do you want your password to include special characters such as '!' or '#'?");
    if (specialCharCriteria === true) {
      console.log("yes, include special characters");
      selectedCharacters = selectedCharacters.concat(specialChar);
    }
    else {
      console.log("no special characters");
      var specialCharCriteria = "";
    }
   
    //confirm user character choices. Use var selectedCharacters for password generation
    console.log("These characters can be randomly selected for the password: " + selectedCharacters);
    
    //create variable to store output from loop function
    var passwordOutput = "";

    //loop function to randomly choose characters from selectedCharacters until lengthCriteria # of characters are generated.
    for (var i = 0; i < lengthCriteria; i++) {
      var randomCharacter = selectedCharacters[Math.floor(Math.random()*selectedCharacters.length)];
      passwordOutput += randomCharacter;
    }

    //return passwordOutput value so it can be passed to HTML element id #password
    return passwordOutput;
    
   }    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
