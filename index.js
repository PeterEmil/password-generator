// the given array
const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?',
  '/'];
let amount = 15;

// just for muscle memory we create three new arrays to hold characters, numbers and symbols
const chars = [];
const nums = [];
const syms = [];

// // steps for taking random characters from given array:
// // console a character from the given array using index
// console.log(characters[0])
// // 1. console amount of characters in given array
// console.log(characters.length) // 91
// // 2. get random number within length of given array
// console.log(Math.random() * 91)
// // 3. floor to integer
// console.log(Math.floor(Math.random() * 91))
// // 4. console random character using floored random index
// console.log(characters[(Math.floor(Math.random() * 91))])


// Code for use on the HTML

// the buttons
let passwordsButton = document.getElementById('generatePasswords');
let clearButton = document.getElementById('clearPasswords');

// the output
let passwordsOutputOne = document.getElementById('outputOne');
let passwordsOutputTwo = document.getElementById('outputTwo');
// console.log(passwordsOutputOne, passwordsOutputTwo)

// clean slate
function clear() {
  value = 0;
  passwordsOutputOne.innerHTML = passwordsOutputTwo.innerHTML = '&nbsp;'
};

// start your engines!
clear();

// get the buttons to work for us
// check if the button works using addEventListener
passwordsButton.addEventListener('click', function () {
  // console.log('it works'); // check
  // passwordsOutputOne.textContent = passwordsOutputTwo.textContent = 'it works' // check
  getRandomCharacter();
  showGeneratedPasswords();
});

// clear passwords
clearButton.addEventListener('click', function () {
  clear();
});

// get random characters from given array for use in outputs
function getRandomCharacter(amount) {
  value = 0;
  for (let i = 0; i < amount; i++) {
    value += characters[(Math.floor(Math.random() * 91))];
  };
  // console.log(value); // check
  return value;
};

// render generated passwords
function showGeneratedPasswords() {
  // first try
  // clear();
  // for (let i = 0; i < amount; i++) {
  //   passwordsOutputOne.textContent += characters[(Math.floor(Math.random() * 91))];
  //   passwordsOutputTwo.textContent += characters[(Math.floor(Math.random() * 91))];
  // };
  // cleaner try with getRandomCharacter() function
  passwordsOutputOne.textContent = getRandomCharacter(amount);
  passwordsOutputTwo.textContent = getRandomCharacter(amount);
};