'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const lowerCase = word.toLowerCase().trim()
    let vPosition = 0
    // const testWord = 'Egg' = ['E', 'g', 'g']
    // strings and arrays are iterable, const newArray not needed, if(vowels.includes(lowerCase[0])) { return lowerCase + 'yay'
    const newArray =  Array.from(lowerCase)
      if(vowels.includes(newArray[0])) {
    const push = newArray.push('yay')
        // console.log(push)
        // console.log(newArray)
    const join = newArray.join('')
        return join
      }
    
    else{
      // Here we are testing the position of a vowel
      for(let i = 1; i < lowerCase.length; i++) {
        if(vowels.includes(lowerCase[i])) {
          vPosition = i 
          // T r e e
          return lowerCase.slice(vPosition) + lowerCase.slice(0, vPosition) + 'ay'
                                // e e 
        }

      

      }

    }




    
    // const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y' ,'z']
    //   if(consonants.inluces(newArray[0])) {

    // const shift = newArray.shift()
    // const splice = newArray.splice(3, 1, 'ay')
    //   }
    







    // const testStr = 'Egg'
    // const yay = 'yay'
    //   if (word.startsWith(vowels)) {
    //     return word.concat(word)
    //   }

    //   console.log(testStr)


    
    // 
    // const complexWord = complexWord.trim().toLowerCase()


  // Your code here , startsWith()

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
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






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
