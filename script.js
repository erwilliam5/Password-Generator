// Assignment Code
let generateBtn;
generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
 
  let passwordResult = ""
  

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let characterArray = ["!", "@", "#", "$", "%", "&", "*", "=","+"]  

  let choiceArray = [];
 

  //Prompt: Length (8-128 characters)
  let length = prompt("Enter how many characters, between 8-128, you'd like in your password?");
  console.log(length);

 
  
  //Confirm: lowercase
  let lowercase = confirm("Would you like to use lower case characters?");
  console.log(lowercase);
  
  if(lowercase){
    choiceArray = choiceArray.concat(lowerArray);
  } else{
    alert("Lower case characters will not be used in your password.");
  }
  console.log(choiceArray);
  


  
  //Confirm: upper case

  let uppercase = confirm("Would you like to use upper case characters?");
  console.log(uppercase);
  
  if(uppercase){
    choiceArray = choiceArray.concat(upperArray);
  } else{
    alert("Upper case characters will not be used in your password.");
  }
  console.log(choiceArray);
  // Confirm: special characters

  let specialCharacters = confirm("Would you like to use special characters?");
  console.log(specialCharacters);
 
  if(specialCharacters){
    choiceArray = choiceArray.concat(characterArray);
  } else{
    alert("Special characters will not be used in your password.");
  }
  console.log(choiceArray);

  // Confirm: numbers
  let numbersChoice = confirm("Would you like to use numbers?");
  console.log(numbersChoice);

  if(numbersChoice){
    choiceArray = choiceArray.concat(numberArray);
  } else{
    alert("Numbers will not be used in your password.");
  }
  console.log(choiceArray);

  

  for (let step = 0; step < length; step++) {
    // Runs 5 times, with values of step 0 through 4.
    passwordResult += choiceArray[getRandomInt(choiceArray.length)];
    
  }
  console.log(passwordResult);

  let secondItem = lowerArray[getRandomInt(lowerArray.length)];

  let passwordText = document.querySelector("#password");

  passwordText.value = passwordResult


  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);