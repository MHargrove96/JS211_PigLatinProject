// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let newWord = "";
const input = document.getElementById('wordInput');
input.addEventListener('keyup', (evt) => {
  newWord.evt.target.value;
});


let display = document.getElementById('displayTranslated');
const button = document.getElementById('translateButton');
button.addEventListener('click', (evt) => {
  display.innerHTML = pigLatin(newWord);
  newWord = "";
  input.value = "";
});



const pigLatin = (word) => {
  word = word.trim().toLowerCase()
  let position = indexOfFirstVowel(word)

  if (position == -1) {
    return word + 'ay'
    //  this mean the (word) has no vowels in it 
  }
  if (position == 0) {
    return word + 'yay'
    //  this mean the (word) starts with a vowel 
  }
  if (position > 0) {
    // this will check at with index the first vowel is in then run the according code block
    // we set varaiables to the corrosponding character in the word with the .charAt() 
    // first it will .slice() the number of characters before the first vowel 
    // second we ruturn the .slice() modified word then the .charAt() lettes in the correct order followed lastly by the suffix 
    if (position == 1) {
      let b = word.charAt(0)
      let a = word.slice(1)
      return a + b + 'ay'
    }
    if (position == 2) {
      let c = word.charAt(1)
      let b = word.charAt(0)
      let a = word.slice(2)
      return a + b + c + 'ay'
    }
    if (position == 3) {
      let d = word.charAt(2)
      let c = word.charAt(1)
      let b = word.charAt(0)
      let a = word.slice(3)
      return a + b + c + d + 'ay'
    }
    if (position == 4) {
      let e = word.charAt(3)
      let d = word.charAt(2)
      let c = word.charAt(1)
      let b = word.charAt(0)
      let a = word.slice(4)
      return a + b + c + d + e + 'ay'
    }
  }
}

let smallestNonNegative = function (num1, num2) {
  if (num1 < 0) {
    return num2;
    // if num1 is < 0 meaning it = -1 there is no vowels in the word 
  }
  if (num2 < 0) {
    return num1;
  }
  if (num1 < num2) {
    return num1;
    // if num1 is < num2 (meaning both are positive number then num one is set to the smallest positive number/index that a vowel sits at)
  } else {
    return num2;
  }
}
// because vowel = -1, num1 equals -1 and num2 = the iteration of the loop 
// when vowelArr[i] hits the value of i is captured and will be the same as the index of the first vowel in the (word) this is saved as num2 
// it then compares num1 (will always be -1) and num 2 (the index of the first vowel) 

let indexOfFirstVowel = (word) => {
  let aindex = word.indexOf('a')
  let eindex = word.indexOf('e')
  let iindex = word.indexOf('i')
  let oindex = word.indexOf('o')
  let uindex = word.indexOf('u')
  let vowelArr = [aindex, eindex, iindex, oindex, uindex]
  let vowel = -1
  for (let i = 0; i < vowelArr.length; i++) {
    vowel = smallestNonNegative(vowel, vowelArr[i])
  }
  return vowel
}
//  first we use .indexOf() to find the position of the vowels in (word) which is passed in the begining of the function 
//  then we make an array of those checks 
//  we set the initial value of vowel to -1 
//  we then loop though the vowelArr setting vowel variable to smallestNonNegative() with vowel passed in first and vowelArr[i] in second.
//  this loop will check each letter in a word (up to 4) max 5 times to see if it is one of the vowel indices then the loop will break. 
//  go to smallestNonNegative function  


// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}





