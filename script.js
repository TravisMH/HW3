// Code
var generateBtn = document.querySelector("#generate");

function generatePass() {
  const lowercase = confirm(
    "Lowercase?"
  );
  const uppercase = confirm(
    "Uppercase?"
  );
  const numeral = confirm(
    "Numeral?"
  );
  const specialchars = confirm(
    "Special Characters?"
  );

  let userContinue = false;
  let passlength = 0;
  let inputError = false;

  if (lowercase || uppercase || numeral || specialchars) {
    userContinue = true;
  }
  if (userContinue) {
    passlength = prompt("Password Length: 8-128 Characters");

    if (passlength !== null) {
      if (isNaN(passlength) === true) {
        inputError = true;
        alert("Please enter a number");
      } else {
        inputError = passlength < 8 || pswlength > 128;
      }
      while (userContinue && inputError) {
        alert("Password Length Must be a Number 8-128");

        userContinue = confirm("Would You Like to Continue?");

        if (userContinue === false) {
          alert("8-128 Characters Only!");

        } else {
          passlength = prompt("Provide 8-128 Character Password");
          if (passlength !== null) {
            inputError = isNaN(passlength) || passlength < 8 || passlength > 128;
          } else {
            userContinue = false;
          }
        }
      }
    } else {
      userContinue = false;
    }
   } else {
      alert("You must select either lowercase, uppercase, numerals, or special characters - refresh page to continue"
      );
    }
    if (!userContinue) {
      return "No Password Generated" ;
    }

//Generate Password Function

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = "0123456789";
const specialChars = "!@#$%^&*+-,./;:<=>?|{";

let possibleChars = "";
let generatedPassword = "";
let i = 0;
if (lowercase) {
  possibleChars = lowercaseChars;
  generatedPassword += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  i++;
}
if (uppercase) {
  possibleChars = possibleChars + uppercaseChars;
  generatedPassword += uppercaseChars[Math.floor(Math.random() * numerals.length)];
  i++;
}
if (numeral) {
  possibleChars = possibleChars + numerals;
  generatedPassword += numerals[Math.floor(Math.random() * numerals.length)];
  i++;
}
if (specialchars) {
  possibleChars = possibleChars + specialChars;
  generatedPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
  i++;
}

for (; i < passlength; i++) {
  generatedPassword +=
    possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
