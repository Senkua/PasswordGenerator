// Assignment code here v

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
function generatePassword(length, charType) {
  //Password Generation Characters
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' 
  };
 
  //The setup to return the solution value (the return val)
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    newVal = charSet.charAt(Math.floor(Math.random() * charSet.length));
    retVal += newVal.toString();
  }
  return retVal;
}
 
// Write password to the #password input
function writePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
  var password = generatePassword(length, charType); 
  var passwordText = document.querySelector("#password");
 
  passwordText.textContent = password;
}
 
generateBtn.addEventListener("click", writePassword);
