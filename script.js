// Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lcase = confirm(
    "Do you want to include lowercase characters in the password"
  );
  const ucase = confirm(
    "Do you want to include uppercase characters in the password?"
  );
  const numeral = confirm("Do you want to include numerals in the password?");
  const spchars = confirm(
    "Do you want to include special characters in the password?"
  );

  let userContinue = false;
  let pswlength = 0;
  let inputErroror = false;

  // Check if the entered char is lowercase, uppercase, numerals or special characters
  if (lcase || ucase || numeral || spchars) {
    userContinue = true;
  }
  if (userContinue) {
    pswlength = prompt("Provide password length 8 - 128 chars");

    if (pswlength !== null) {
      if (isNaN(pswlength) === true) {
        // console.log ('PSWLEN-2:', pswlength);
        inputError = true;
        alert("Please enter a number");
      } else {
        inputError = pswlength < 8 || pswlength > 128;
      }

      while (userContinue && inputError) {
        alert("password Length is a number between 8 and 128.");

        userContinue = confirm("would you like to continue?");

        if (userContinue === false) {
          alert("No passord generated; password Length 8 - 128 chars only");
        } else {
          pswlength = prompt("Provide password length 8 - 128 chars");
          if (pswlength !== null) {
            inputError = isNaN(pswlength) || pswlength < 8 || pswlength > 128;
          } else {
            userContinue = false;
          }
        }
      }
    } else {
      userContinue = false;
    }
    //  alert("Click Generate Password button to Generate password");
  } else {
    alert(
      "One of lowerCase, upperCase, numerals or special Characters have to be selected to generate Password, Please refresh page and re-enter"
    );
  }

  if (!userContinue) {
    return "No password Generated ";
  }

  //Function to generate password

  const lcaseChars = "abcdefghijklmnopqrstuvwxyz";
  const ucaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerals = "0123456789";
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let possiblePswChars = "";
  let generatedPsw = "";
  let i = 0;
  if (lcase) {
    possiblePswChars = lcaseChars;
    generatedPsw += lcaseChars[Math.floor(Math.random() * lcaseChars.length)];
    i++;
  }
  if (ucase) {
    possiblePswChars = possiblePswChars + ucaseChars;
    generatedPsw += ucaseChars[Math.floor(Math.random() * ucaseChars.length)];
    i++;
  }
  if (numeral) {
    possiblePswChars = possiblePswChars + numerals;
    generatedPsw += numerals[Math.floor(Math.random() * numerals.length)];
    i++;
  }
  if (spchars) {
    possiblePswChars = possiblePswChars + specialChars;
    generatedPsw +=
      specialChars[Math.floor(Math.random() * specialChars.length)];
    i++;
  }

  for (; i < pswlength; i++) {
    generatedPsw +=
      possiblePswChars[Math.floor(Math.random() * possiblePswChars.length)];
  }
  return generatedPsw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);
