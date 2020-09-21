// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

prompt( "How many characters would you like your password to contain?")
confirm("click ok to confirm special characters")
confirm("click ok to confirm numeric characters")

function generatePassword(lessPassword, morePassword) {
  if (lessPassword > 8 && morePassword < 129) {
    return Math.floor(Math.random())
  }
  return 0;
}


// function generatePassword(a) {
//     var password;
//     if ( a > 8) {
//       return Math.random();
//     } else if (a < 129) {
//       return Math.random();
//     } else {
//       return undefined
//     }
//     return result;
//   }

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
