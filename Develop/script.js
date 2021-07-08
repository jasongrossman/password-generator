// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthCriteria = "";

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
  var lengthCriteria = window.prompt("How many characters should be in your password? (must be between 8-128");
    if (lengthCriteria >= 8 && lengthCriteria <= 128) {
      console.log("you've chosen " + lengthCriteria + " number of characters");
    }
    else {
      alert("sorry, you must provide a number between 8-128.");
      passwordCriteria();
    }

  //password character type prompt (lowercase). If confirmed, add it to the password criteria, if not, do not add.
    var lowerCaseCriteria = window.confirm("Do you want your password to contain lowercase letters?");
    if (lowerCaseCriteria === true) {
      console.log("yes, include lowercase");
      var lowerCaseCriteria = "abcdefghijklmnopqrstuvwxyz";
    }
    else {
      console.log("no lower case");
      var lowerCaseCriteria = "";
    }

  //password character type prompt (uppercase). If confirmed, add it to the password criteria, if not, do not add.
    var upperCaseCriteria = window.confirm("Do you want your password to contain uppercase letters?");
    if (upperCaseCriteria === true) {
      console.log("yes, include uppercase");
      var upperCaseCriteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else {
      console.log("no uppercase");
      var upperCaseCriteria = "";
    }
  //password character type prompt (numeric). If confirmed, add it to the password criteria, if not, do not add.
    var numericCriteria = window.confirm("Do you want your password to contain numbers?");
    if (numericCriteria === true) {
      console.log("yes, include numbers"); 
      var numericCriteria = "01234567890";
    }
    else {
      console.log("no numbers");
      var numericCriteria = "";
    }

  //password character type prompt (special characters). If confirmed, add it to the password criteria, if not, do not add. 
    var specialCharCriteria = window.confirm("Do you want your password to include special characters such as '!' or '#'?");
    if (specialCharCriteria === true) {
      console.log("yes, include special characters");
      var specialCharCriteria = "!@#$%^&*()-/+=.,;:~";
    }
    else {
      console.log("no special characters");
      var specialCharCriteria = "";
    }

    //generate array containing all) criteria
    var criteriaArr = [lengthCriteria, lowerCaseCriteria, upperCaseCriteria, numericCriteria, specialCharCriteria];
    
    
    var selectedCharacters = [lowerCaseCriteria, upperCaseCriteria, numericCriteria, specialCharCriteria];
    console.log(selectedCharacters);
    var answer = "";
    for (var i = 0; i < lengthCriteria; i++ ) {
        var choice = selectedCharacters[Math.ceil(Math.random()*4)-1];
        var choiceItem = choice[Math.ceil(Math.random()*(choice.length))-1]
        answer += choiceItem;
    }
    // for(var i=0; i< lengthCriteria; i++){ // Append needed values to end
    //     var choice = selectedCharacters[i]; 
    //     var choiceItem = choice[Math.ceil(Math.random()*(choice.length))-1] 
    //     answer += choiceItem;
    // }
    answer = answer.split('').sort(function(){
        return 0.5 - Math.random(); 
    }).join('');
    console.log(answer);


    // console.log(criteriaArr);

    // randomizer = function() {
    // for (var i = 0; i < lengthCriteria; i++ );

      
    
    
    var inputs = lowerCaseCriteria, upperCaseCriteria, numericCriteria, specialCharCriteria;
    var input

    }

    // var randomNumber = Math.random().toString(36).slice(-lengthCriteria);
    // console.log(randomNumber);
  


// var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowers = "abcdefghijklmnopqrstuvwxyz";
// var digits = "01234567890";
// var all = uppers + lowers + digits;
// var choices = [uppers,lowers,digits];
// var checks = [];
// var password = ""; 
// var ranLength = lengthCriteria //Math.ceil(Math.random()*10)+3;
// for(var i=0; i<ranLength; i++){
//     var choice = choices[Math.ceil(Math.random()*3)-1];
//     var choiceItem = choice[Math.ceil(Math.random()*(choice.length))-1]
//     password += choiceItem;
// }
// for(var i=0; i<3; i++){ // Append needed values to end
//     var choice = choices[i]; 
//     var choiceItem = choice[Math.ceil(Math.random()*(choice.length))-1] 
//     password += choiceItem;
// }
// password = password.split('').sort(function(){
//     return 0.5 - Math.random(); 
// }).join('');
// console.log(password);


  //generate password function
  generatePassword = function() {
    //pull in password criteria
    passwordCriteria();
  
    //generate a password string, using criteria to generate random character output
    

    //pass the passwordText.

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
