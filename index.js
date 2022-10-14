let inputText = document.getElementById("inputText");
let key = document.getElementById("key");

function codeMessage(inputText, key) {
  // an array with each element as a letter
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let lowerCaseText = inputText.toLowerCase();
  let outputText = "";
  let flag = true;
  if (checked.checked) {
    flag = true;
  } else {
    flag = false;
  }

  // loop through the lowercasetext
  for (let i = 0; i < lowerCaseText.length; i++) {
    let currentLetter = lowerCaseText[i]; // first letter
    // if there are empty spaces jumps over one iteration in the loop
    if (currentLetter === " ") {
      outputText += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter); // index of the letters 0-25
    let newIndex = currentIndex + key;
    if (newIndex > 25) newIndex = newIndex - 26; //calculate new index of the letters
    if (newIndex < 0) newIndex = 26 + newIndex;
    // if it is upper case letter, it will be added to the string
    if (inputText[i] === inputText[i].toUpperCase()) {
      outputText += alphabet[newIndex].toUpperCase();
    } else outputText += alphabet[newIndex];
  }
  document.getElementById("outputText").value;
}
