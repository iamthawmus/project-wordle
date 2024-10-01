import React from 'react';

function Banner({ hasWon, guessCount, answer }) {
  return (
    hasWon === 'Won' ?
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          
          <strong>{guessCount} guesses</strong>.
        </p>
      </div>
      :
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
  );
}

export default Banner;
