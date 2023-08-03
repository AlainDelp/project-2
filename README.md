# Project #2 - Guessing Game

## Overview

This project is a Guessing Game where a player attempts to guess a winning number. The player gets hints after making a guess, which indicate how close or far they are from the winning number. The player has 5 chances to guess the winning number correctly.

Here is an example of this project with CSS styling and extra credit completed:
[Guessing Game](https://se7en-illa.github.io/guess-the-number/)

## Javascript Classes

Please watch this video for important information needed to complete this project:
[Javascript Classes](https://www.youtube.com/watch?v=2ZphE5HcQPQ)

## Installation

1. Fork this repository to make your own copy.
2. Clone this repository: `git clone <repo_url>`.
3. Navigate to the project folder: `cd dom-project-2`.
4. Install the dependencies: `npm install`.

## Tasks

For this project, you are expected to implement the following functionalities:

1. `generateWinningNumber`: a function that returns a random number between 1 and 100.
2. `shuffle`: a function that takes an array as an argument, and returns the array shuffled in place using the Fisher-Yates Shuffle algorithm.
3. A `Game` class with the following properties and methods:
   - `playersGuess`: a property that will hold the player's number guess.
   - `pastGuesses`: an array that holds all of the player's past guesses.
   - `winningNumber`: a property that calls `generateWinningNumber`.
   - `difference`: a method that returns the absolute value of the difference between the `playersGuess` and `winningNumber`.
   - `isLower`: a method that returns true if the `playersGuess` is lower than `winningNumber`, and false if not.
   - `playersGuessSubmission`: a method that takes a number as an argument and sets that as `playersGuess`.
   - `checkGuess`: a method that returns a string based on the player's guess and the winning number.
   - `newGame`: a method that returns a new game instance.
   - `provideHint`: a method that generates an array with a length of 3, which includes the winning number and two other random numbers.

## Running Tests

After implementing the functions and the Game class, run the tests to verify that your implementations are correct: `npm test`. You must do this BEFORE adding any event listeners to make your game functionality.

## Extra Credit

After completing the basic implementation of the game, consider adding more features like a score tracker, difficulty levels, a countdown timer, or a progress bar.
