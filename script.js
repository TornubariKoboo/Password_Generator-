// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
return "This will be replaced by generated password.";
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// setting password length/complexity 
var complexity = document.getElementById("slider").value
// possible password values 
var values = "ABCDEFGHIJLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz12345678910!@#$%^&*()"

var password = "";
// for loop to choose password characters
for(var i = 0; i <= complexity; i++){
  password = password + values.chartAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
}