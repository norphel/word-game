import React from "react";

function Guess({ guess }) {
  const word = guess?.guess.split("");

  if (word) {
    return (
      <p className="guess">
        {word.map((letter, index) => (
          <span key={index} className="cell">
            {letter}
          </span>
        ))}
      </p>
    );
  } else {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }
}

export default Guess;
