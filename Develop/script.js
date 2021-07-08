// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
  
  //append passwordText.value into text area element
  }

//criteria for password generator function
  var passwordCriteria = function() {
  
  //password length prompt. If confirmed, add it to the password criteria, if not, do not add.
  var lengthCriteria = window.confirm("Do you want your password to be between 8 and 128 characters?");
    if (lengthCriteria === true) {
      console.log("yes, 8-128 characters pls");
    }
    else {
      console.log("no, go away");
    }
  //password character type prompt (lowercase). If confirmed, add it to the password criteria, if not, do not add.
    var lowerCaseCriteria = window.confirm("Do you want your password to contain lowercase letters?");
    if (lowerCaseCriteria === true) {
      console.log("yes, include lowercase");
    }
    else {
      console.log("no, go away");
    }

  //password character type prompt (uppercase). If confirmed, add it to the password criteria, if not, do not add.
    var upperCaseCriteria = window.confirm("Do you want your password to contain uppercase letters?");
    if (upperCaseCriteria === true) {
      console.log("yes, include uppercase");
    }
    else {
      console.log("no, go away");
    }
  //password character type prompt (numeric). If confirmed, add it to the password criteria, if not, do not add.
    var numericCriteria = window.confirm("Do you want your password to contain numbers?");
    if (numericCriteria === true) {
      console.log("yes, include numbers");
    }
    else {
      console.log("no, go away");
    }

  //password character type prompt (special characters). If confirmed, add it to the password criteria, if not, do not add. 
    var specialCharCriteria = window.confirm("Do you want your password to include special characters such as '!' or '#'?");
    if (numericCriteria === true) {
      console.log("yes, include special characters");
    }
    else {
      console.log("no, go away");
    }

    //generate array containing all) criteria
    var criteriaArr = [lengthCriteria, lowerCaseCriteria, upperCaseCriteria, numericCriteria, specialCharCriteria];
    console.log(criteriaObj);
}

  //generate password function
  generatePassword = function() {
    //pull in password criteria
    passwordCriteria();

    //generate a password string, using criteria to generate random character output
    
    //pass the passwordText.

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
