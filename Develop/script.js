// Assignment Code
var generateBtn = document.querySelector("#generate");

//    - Create alert for password length both to short and to long.
var pwLength = parseInt(
  prompt('How many characters would you like your password to contain?'),
  10
 );

 if (pwLength < 8) {
  alert('Password length must be at least 8 characters');
  } else if (pwLength > 128) {
    alert('Password cannot exceed 128 characters');
   }

function getPrompt(){

}

//create function for password length

function createPassword() {
var pwdChar = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+<>? ~`;:|ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var passwordLength = length;

var pwdChar = new Uint32Array(length);
window.crypto.getRandomValues(pwd);

for (i=0; i<length; i++){
  password += pwdChar[array[i] % pwdChar.length];
}
return password
console.log(password)


}

createPassword(9)


//create function for password choices
//  - Create function for Lowercase 
//  - Create function for Uppercase 
//  - Create function for number 
//  - Create function for special character

//create user prompts
//  - Ask password length


//  - Ask password lowercase
var pwLower = parseInt(
  prompt('Do you want lowercase letters?'),
  10
 );

 if (pwLength < 8) {
  alert('Password length must be at least 8 characters');
  } else if (pwLength > 128) {
    alert('Password cannot exceed 128 characters');
   }
//  - Ask password uppercase
//  - Ask password number
//  - Ask password special character

//create the randomization of password
//  - Create the for loop



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
