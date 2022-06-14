// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*"];


var lengthPrompt = window.prompt ("Enter password length? (Enter Number 8-128)")

var passwordLength = function(lengthPrompt) {
 /* if (lengthPrompt < 128 ) {
    window.alert(lengthPrompt + " password is not long enough. Enter new length greater than 8")
    // return to the beginning ??
    }
    else if (lengthPrompt > 8) {
      window.alert(lengthPrompt + " password is too long. Enter new length less than 128 characters.")
    }
    else {
      return passwordLength;
    }
}; */
 if (lengthPrompt > 7 && 129 < lengthPrompt) {
     return passwordLength;
    }
    else { 
      window.alert ("password does not fit length requirement")
      passwordLength();
    }
   
  };

/*var upperConfirm = window.confirm("Include upper case letters?") 
  
  var upper = function (upperConfirm){
    if (upperConfirm

    }
    else if (
  } 
  
 */

/*var lowerPrompt = window.prompt("Include lower case letters? Yes or No?") 

  var lower = function (lowerPrompt){
    if (lowerPrompt === "yes" || upperPrompt === "YES"){
     var lower = 
    }
     else (
    }


  } */

/*var numbersPrompt = window.prompt("Include numbers? Yes or No?") 
  var numbers = function (numbersPrompt){}
    if (numberPrompt === "yes" || upperPrompt === "YES"){
     var numbers = 
    }
    else (


    } */

/*var charConfirm = window.prompt("Include special characters? Yes or No?") 
  var numbers = function (charConfirm){
  if (charConfirm
    }
    else (


  } */

  /* iterator 
  (var i =0; i<passwordLength.length; i++){ and randomly puts in the values selected 
    
    */


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
