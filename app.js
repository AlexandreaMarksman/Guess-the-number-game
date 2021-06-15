const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        let currentGuess = NaN
      while(currentGuess !== this.secretNum) {
        currentGuess = this.getGuess()


        this.prevGuesses.push(currentGuess)
        this.render(currentGuess) 
      }
    },
    getGuess: function () {
      let guess = NaN
      while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      }
      //once we exit the while loop, we return guess
      return guess
      },
      render: function (currentGuess) {

        const highOrLow = currentGuess < this.secretNum ? 'Low' : 'High'
        if (currentGuess === parseInt(this.secretNum)) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} attempts`)
        } else {
        alert(`Your guess is too ${highOrLow} Previous guesses: ${this.prevGuesses.join(', ')}`)
        }
        }
}


// guess = prompt(`Guess The Number`)
// var answer = 69;
// var guess = "What's your guess?"

// for (i = 0; i <100; i++); {
// guess = prompt("What's your Guess?")
// if (answer == guess);}
// {
//   alert("you guessed correctly");
// }
///










game.play()