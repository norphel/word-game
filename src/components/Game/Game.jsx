import React from "react";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isWon, setIsWon] = React.useState(null);

  function handleGuessSubmit(newGuess) {
    if (newGuess === answer) {
      setIsWon(true);
    }

    // when submitting a guess, guesses has not been updated yet. Therefore comparing guesses.length === 5 and not 6
    if (guesses.length === 5 && newGuess !== answer) {
      setIsWon(false);
    }

    const nextGuesses = [
      ...guesses,
      {
        id: crypto.randomUUID(),
        guess: newGuess,
      },
    ];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} isWon={isWon} />
      <ResultBanner isWon={isWon} numOfTries={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
