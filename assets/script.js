//declarations and references
//variables objects, arrays, references to the HTML basically things that we use multiple times
var upperCaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lowerCaseChars = upperCaseChars.toLowerCase();
var numberChars = '1234567890';
var specialChars = '!@#$%^&*()_+'

//functional components 
//instructions for our code
let randomNumber = function(characterOptionLength) {
  var value= Math.floor(Math.random() * (characterOptionLength));
  return value;
}

let userInput = function () {
  var passwordPreference = {
    length: '',
    upperCase: false,
    lowerCase: false,
    specialChar: false,
    numbers: false
    }
 passwordPreference.length = window.prompt("Enter your desired password length (8-128).");
// make sure its between 8 and 128
while(passwordPreference.length  < 8 || passwordPreference.length > 128){
  passwordPreference.length = window.prompt("Value input is out of the range requested, please use a number from 8-128.")
}
// Ask true or false
while(passwordPreference.lowerCase == false && passwordPreference.numbers == false && passwordPreference.specialChar == false && passwordPreference.upperCase == false){
  passwordPreference.upperCase = window.confirm("Select 'Ok' to choose upper case, if not press 'Cancel'");
  passwordPreference.lowerCase = window.confirm("Select 'Ok' to choose lower case, if not press 'Cancel'");
  passwordPreference.specialChar = window.confirm("Select 'Ok' to choose special characters, if not press 'Cancel'");
  passwordPreference.numbers = window.confirm("Select 'Ok' to choose numbers, if not press 'Cancel'");

  if(passwordPreference.lowerCase == false && passwordPreference.numbers == false && passwordPreference.specialChar == false && passwordPreference.upperCase == false){
    window.alert("Hey, bro. You need to pick one at least.")
  }
}
  
 var characterBank = []

 if(passwordPreference.upperCase){
  characterBank = characterBank.concat(upperCaseChars.split(''))
 }
 if(passwordPreference.lowerCase){
  characterBank = characterBank.concat(lowerCaseChars.split(''))
 }
 if(passwordPreference.specialChar){
  characterBank = characterBank.concat(specialChars.split(''))
 }
 if(passwordPreference.numbers){
  characterBank = characterBank.concat(numberChars.split(''))
 }

 var finalPassword = '';

 for( var i = 0; i < passwordPreference.length; i++){
  var newSingleCharacterIndex = randomNumber(characterBank.length)
  var newSingleCharacter = characterBank[newSingleCharacterIndex]
  finalPassword += newSingleCharacter
 }

 console.log(characterBank);

 document.getElementById("password").value = finalPassword;
//  return passwordPreference;
}

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 //var password = generatePassword();
//var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

//Invocations and event listeners
//Activating the functions that we define and doing stuff with them

//generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", function(){ 
  var promptPreference = window.confirm("Press OK to generate a password.");
  if (promptPreference) {
    userInput();
  }
  else {
    window.alert ("Have a nice day!");
  }
});
