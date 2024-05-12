import React from "react";

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guessInput.toUpperCase());
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
