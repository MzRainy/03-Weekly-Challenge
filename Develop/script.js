// Assignment Code
var generateBtn = document.querySelector("#generate");

//    - Create alert for password length both to short and to long.
var length = prompt("Please enter the length of your password between 8 and 128 characters.");
console.log (length);

function getPrompt(){


}


var pwlength = parseInt(
  prompt('How many characters would you like your password to contain?');

 if (pwlength < 8) {
  alert('Password length must be at least 8 characters');
   } else if (pwlength > 128) {
    alert('Password cannot exceed 128 characters');
     } 



//create function for password length
length = 

function createPassword(length) {
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
