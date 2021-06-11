// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function (){
  var specialArr = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":","\\","|","'",'"',",",".","<",">","/","?"];
  var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var len = prompt("How long the password's gonna be?");
  if (len<8 || len>128){
    alert("Password length needs to be between 8 and 128");
    return "Password length incorrect";
  }
  var lower_case = confirm("Do you want lower case characters?");
  var upper_case = confirm("Do you want upper case characters?");
  var numeric = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  if ((!upper_case) && (!lower_case) && (!numeric) && (!special)){
    alert("Pick atleast one option to continue");
    return "Pick atleast one option";
  }
  var allCharArr = [];
  if(lower_case){
    allCharArr = allCharArr.concat(lowercaseArr);
  }
  if(upper_case){
    allCharArr = allCharArr.concat(uppercaseArr);
  }
  if(numeric){
    allCharArr = allCharArr.concat(numericArr);
  }
  if(special){
    allCharArr = allCharArr.concat(specialArr);
  }
  var randomChars = "";
  for(i=0; i<len; i++){
    var num = Math.floor(Math.random() * allCharArr.length);
    var char = allCharArr[num];
    randomChars = randomChars + char; 
  }
  return randomChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
