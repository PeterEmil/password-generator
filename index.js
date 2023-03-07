// the given array
const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?',
  '/'];
let amount = 15;
let password = '';

// the buttons
const passwordsButton = document.getElementById('generatePasswords');
const clearButton = document.getElementById('clearPasswords');

// the input slider & display
const amountInput = document.getElementById('amountInput');
const amountDisplay = document.getElementById('amountDisplay');
amountInput.value = amountDisplay.textContent = amount;

// the outputs
const passwordsOutputOne = document.getElementById('outputOne');
const passwordsOutputTwo = document.getElementById('outputTwo');

// clean slate
function clear() {
  passwordsOutputOne.innerHTML = passwordsOutputTwo.innerHTML = ''
};

// generate random passwords using addEventListener
passwordsButton.addEventListener('click', function () {
  getRandomCharacter();
  showGeneratedPasswords();
});

// clear passwords using addEventListener
clearButton.addEventListener('click', function () {
  clear();
});

// update amount of characters using range slider
amountInput.addEventListener('input', function () {
  amountDisplay.textContent = amountInput.value;
});

// get random characters from given array for use in outputs
function getRandomCharacter() {
  password = ''; // clear out previous run
  amount = amountInput.value; // get amount from input
  for (let i = 0; i < amount; i++) {
    password += characters[(Math.floor(Math.random() * characters.length))];
  };
  return password;
};

// render generated passwords
function showGeneratedPasswords() {
  passwordsOutputOne.textContent = getRandomCharacter();
  passwordsOutputTwo.textContent = getRandomCharacter();
};





// ********** Workshop **********

// // steps for taking random characters from given array:
// // console a character from the given array using index
// console.log(characters[0])
// // 1. console amount of characters in given array
// console.log(characters.length) // 91
// // 2. get random number within length of given array
// console.log(Math.random() * 91) // fixed on certain amount
// console.log(Math.random() * characters.length) // connected to array - better option
// // 3. floor to integer
// console.log(Math.floor(Math.random() * characters.length))
// // 4. console random character using floored random index
// console.log(characters[(Math.floor(Math.random() * characters.length))])

// just for muscle memory we create three new arrays to hold characters, numbers and symbols
// let chars = [];
// let nums = [];
// let syms = [];
// function createSubArrays() {
//   for (let i = 0; i < characters.length; i++) {
//     if (i < 52) {
//       chars += characters[i];
//     } else if (i > 61) {
//       syms += characters[i];
//     } else nums += characters[i];
//   };
//   console.log(chars);
//   console.log(nums);
//   console.log(syms);
// };

// createSubArrays();

// Code for use on the HTML