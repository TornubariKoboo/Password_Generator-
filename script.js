// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  // prompt to ask the user how long would they like their password to be
  var numberCharacter = prompt(
    "How many characters would you like your password to contain?"
  );
  while (numberCharacter < 8 || numberCharacter > 129) {
   numberCharacter = prompt("Password needs to be between 8 and 129 characters"); 
  }
  var amountEntered = ('' + getRandomLower());
  for (i = 0; i < numberCharacter; i++) {
    (getRandomLower() + amountEntered);
  }  
  console.log(amountEntered + getRandomLower)

  
    // return (
    //   getRandomLower() 
    //   getRandomNumber() 
    //   getRandomUpper() 
    //   getRandomSymbol()
    // );
    

  // Message to confirm the user is ok with special characters and numeric characters
  confirm("click ok to confirm special characters");
  confirm("click ok to confirm numeric characters");
  // Message to confirm the user is ok with lower case and upper case characters
  confirm("click ok to confirm upper case");
  confirm("click ok to confirm lower case");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
