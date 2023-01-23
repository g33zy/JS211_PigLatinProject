const pigLatin = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    word = document.getElementById('user-input').value
    const lowerCase = word.toLowerCase().trim()
    console.log(lowerCase)
    let vPosition = 0

    if(lowerCase === '') {
        document.getElementById('display-result').innerHTML = 'No input found, Please type a word!'
        return false
    }

    // if(lowerCase.value.length < 0) {
    //     document.getElementById('display-result').innerHTML = 'No input found, Please type a word!'

    // }

    if(!isNaN(lowerCase)) {
        document.getElementById('display-result').innerHTML = 'No numbers allowed!'
        return false

    }

    // if(lowerCase !== null && lowerCase.value === "") {


    // }


    // const testWord = 'Egg' = ['E', 'g', 'g']
    // strings and arrays are iterable, const newArray not needed, if(vowels.includes(lowerCase[0])) { return lowerCase + 'yay'
    const newArray =  Array.from(lowerCase)
      if(vowels.includes(newArray[0])) {
    const push = newArray.push('yay')
        // console.log(push)
        // console.log(newArray)
    const join = newArray.join('')
        // return join
        document.getElementById('display-result').innerHTML = join 
      }
    
    else{
      // Here we are testing the position of a vowel
      for(let i = 1; i < lowerCase.length; i++) {
        if(vowels.includes(lowerCase[i])) {
          vPosition = i 
          break;
          // T r e e
          
                                // e e 
        }

      

      }
    //   return lowerCase.slice(vPosition) + lowerCase.slice(0, vPosition) + 'ay'
    document.getElementById('display-result').innerHTML = lowerCase.slice(vPosition) + lowerCase.slice(0, vPosition) + 'ay'

    }



    

}

// const translate = document.getElementById("translate") 

// translate.addEventListener("click", (e) => {
//     e.preventDefault()
//     pigLatin()
// } )

