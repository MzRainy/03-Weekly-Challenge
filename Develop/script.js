var pwLength = 10;
var pwArray = [];
var  lowerCaseArray = ['a' ,'b' ,'c' ,'d' ,'e','f','g' ,'h' ,'i' , 'j','k' ,'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r','s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z'];
var  upperCaseArray = ['A' ,'B' ,'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N' ,'O' ,'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X' ,'Y' ,'Z'];
var  numberArray = [ '0','1','2','3','4','5','6','7','8','9'];
var  symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*','(',')','_', '-', '+', '~','<', '>', '?','_'];
// Assignment Code
var generateBtn = document.querySelector("#generate");
//    - Create alert for password length both to short and to long.
//create function for password length
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
//function 
//if(pwLowerCase === false){
// alert('Please select at least 1 true option.');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Write password to the #password input
function writePassword() {
  var finalPw = pwPrompts();
  var passwordText = document.querySelector("#password");

  if(finalPw){
  var newPwd = generatePassword();  
  passwordText.value = newPwd;
  }
}

function generatePassword() {
  var password = '';

  for(var i = 0; i < pwLength; i++) {
    var randLetter = math.floor(math.random() * pwArray.length)
    password = password + pwArray[randLetter];
  }
return password;
}

function pwPrompts(){
  pwArray = [];
 
  pwLength = parseInt(prompt('How many characters would you like your password to contain? Please choose between 8 and 128.'));

   if (isNaN(pwLength) || pwLength < 8 || pwLength >128) {
    alert('Password length must be between 8- 128. Please answer with a digit.');
   return false;
   }
    console.log(pwLength);

    if (confirm('Do you want an uppercase letter?'));
    pwArray = pwArray.concat(lowerCaseArray);
    console.log(lowerCaseArray);

   if  (confirm('Do you want an uppercase letter?'));
   pwArray = pwArray.concat(upperCaseArray);
   console.log(upperCaseArray);
  
    if (confirm('Do you want numbers?'));
    pwArray = pwArray.concat(numberArray);
    console.log(numberArray);
  
    if (confirm('Do you want special characters?'));
    pwArray = pwArray.concat(symbolArray);
    console.log(symbolArray);
  
  }
  return true;



