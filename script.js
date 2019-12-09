
var specialCharacters = [ "@", "%", "+","\\", "/", "'", "!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_", "."];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedCharacters = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getPasswordOptions() {
  
  var length = parseInt(prompt(
    " Hello fellow user! How many characters would you like your password to contain but its has to be at least 8?"
  ));

    if (isNaN(length) === true) {
    alert("Your character needs to be a number only please");
    return;
  }

    if (length < 8) {
    alert("Your password length must be at least 8 characters long");
    return;
  }

    if (length > 128) {
    alert("Your password length must be less than 129 characters long");
    return;
  }

var needsSpecialCharacters = confirm("Please click OK to confirm using special characters.");
var needsNumericCharacters = confirm("Please click OK to confirm using a number.");
var needsLowerCasedCharacters = confirm("Please click OK to confirm using lowercase letters.");
var needsUpperCasedCharacters = confirm("Please click OK to confirm using uppercase letters.");

if (needsSpecialCharacters === false && needsNumericCharacters === false && needsLowerCasedCharacters === false &&
    needsUpperCasedCharacters === false
  ) {
    alert("You need to confirm at least one character type");
    return;
  }

  
  var passwordSelection = {
    length: length,
    needsSpecialCharacters: needsSpecialCharacters,
    needsNumericCharacters: needsNumericCharacters,
    needsLowerCasedCharacters: needsLowerCasedCharacters,
    needsUpperCasedCharacters: needsUpperCasedCharacters
  };

  return passwordSelection;
}


function getRandom(arr) {
  var mathRandom = Math.floor(Math.random() * arr.length);
  var lengthRandom = arr[mathRandom];

  return lengthRandom;
}


function generatePassword() {
  var choices = getPasswordOptions();
  var effect = [];
  var viable = [];
  var certain = [];

  
  if (choices.needsSpecialCharacters) {
    viable = viable.concat(specialCharacters);
    certain.push(getRandom(specialCharacters));
  }

 
  if (choices.needsNumericCharacters) {
    viable = viable.concat(numericCharacters);
    certain.push(getRandom(numericCharacters));
  }

 
  if (choices.needsLowerCasedCharacters) {
    viable = viable.concat(lowerCasedCharacters);
    certain.push(getRandom(lowerCasedCharacters));
  }

  
  if (choices.needsUpperCasedCharacters) {
    viable = viable.concat(upperCasedCharacters);
    certain.push(getRandom(upperCasedCharacters));
  }

  
  for (var i = 0; i < choices.length; i++) {
    var feabile = getRandom(viable);

    effect.push(feabile);
  }

  
  for (var i = 0; i < certain.length; i++) {
    effect[i] = certain[i];
  }

 
  return effect.join("");
}


var exactButton = document.querySelector("#copy");
var generateButton = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordCharacters = document.querySelector("#password");

  passwordCharacters.value = password;

  exactButton.removeAttribute("disabled");
  exactButton.focus();
}

function copyToClipboard() {
  var passwordCharacters = document.querySelector("#password");

  passwordCharacters.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordCharacters.value + " was copied to your clipboard."
  );
}


generateButton.addEventListener("click", writePassword);


exactButton.addEventListener("click", copyToClipboard);
