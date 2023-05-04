// Assignment code here
var length = Number(prompt("Enter a password length between 8 and 128"))
charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
password = generatePassword(); 
document.getElementById("display").value= password;
document.getElementById('copy-btn').addEventListener('click', copypassword);

function generatePassword() {
  var charsets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' };



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
