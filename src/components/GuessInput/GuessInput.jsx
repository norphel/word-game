import React from "react";

function GuessInput({ handleGuessSubmit, isWon }) {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuessSubmit(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        autoFocus={true}
        minLength={5}
        maxLength={5}
        disabled={isWon === true || isWon === false}
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
