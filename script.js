// Assignment code here

//Prompts to determine the password generation
var length = Number(prompt("Enter a password length between 8 and 128"))
charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
password = generatePassword(); 
document.getElementById("display").value= password;

//Password Generation Characters

function generatePassword() {
  var charSet = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' 
  };

//The setup to return the solution value (the return val)

var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
var retVal = "";
for (var i = 0; i < length; i++) {
  retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return retVal;
}
//To make the password value appear in the box
document.getElementById("display").select();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
