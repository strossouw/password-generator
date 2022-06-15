// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*"];

function generatePassword (){  
var lengthPrompt = parseInt (window.prompt ("Enter password length? (Enter Number 8-128)"))

  if (lengthPrompt < 8 ) {
    window.alert(lengthPrompt + " password is not long enough. Enter new length greater than 8")
     return;
    }
    if (lengthPrompt > 128) {
      window.alert(lengthPrompt + " password is too long. Enter new length less than 128 characters.")
      return;
    }
    if (Number.isNaN(lengthPrompt)){
        window.alert(lengthPrompt + "input is not a number")
        return;
    }

    var upperConfirm = window.confirm("Include upper case letters?") 
    var lowerConfirm = window.confirm("Include lower case letters?)")
    var numbersConfirm = window.confirm("Include numbers?)")
    var charConfirm = window.confirm("Include special characters?") 

    var passwordChar = []
    var userChar = []

    if (upperConfirm) {
        userChar = userChar.concat(upperCase)
        passwordChar.push(upperCase[Math.floor(Math.random()*upperCase.length)])
    }
    if (lowerConfirm) {
        userChar = userChar.concat(lowerCase)
        passwordChar.push(lowerCase[Math.floor(Math.random()*lowerCase.length)])
    }   
    if (numbersConfirm) {
        userChar = userChar.concat(numbers)
        passwordChar.push(numbers[Math.floor(Math.random()*numbers.length)])
    }   
    if (charConfirm) {
        userChar = userChar.concat(specialChar)
        passwordChar.push(specialChar[Math.floor(Math.random()*specialChar.length)])
    }

    var remaining = lengthPrompt-passwordChar.length
        for (var i =0; i<remaining; i++){
            passwordChar.push(userChar[Math.floor(Math.random()*userChar.length)])
        }

        return passwordChar.join("");
}



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
