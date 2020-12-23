let randomNumber = function(min, max) {
  var value= Math.floor(Math.random() * (max - min + 1) + 40);
  return value;
}



let userInput = function () {
  var passwordPreference = {
    length: 2,
    upperCase: 2,
    lowerCase: 2,
    specialChar: 2,
    numbers: 2
    }
 passwordPreference.length = window.prompt("Enter your desired password length (8-128).");
 passwordPreference.upperCase = window.prompt("How many upper case letters? (at least 2)");
 passwordPreference.lowerCase = window.prompt("How many lower case (at least 2)");
 passwordPreference.specialChar = window.prompt("How many special characters? (at least 2)");
 passwordPreference.numbers = window.prompt("How many numbers? (at least 2)");
 console.log(passwordPreference);
 document.getElementById("password").innerHTML = "Successful Test";
 return passwordPreference;
 
}

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 //var password = generatePassword();
//var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
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
