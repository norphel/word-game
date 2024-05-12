import React from "react";

function ResultBanner({ isWon, numOfTries, answer }) {
  if (isWon) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numOfTries} {numOfTries > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (isWon === false) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is
          <strong> {answer} </strong>
        </p>
      </div>
    );
  }
}

export default ResultBanner;
