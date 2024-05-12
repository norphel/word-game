import React from "react";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmit(newGuess) {
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
      <PreviousGuesses guesses={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
