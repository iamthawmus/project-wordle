import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
function Guess({ newGuess, answer }) {
  const checkedArray = checkGuess(newGuess, answer);
  return (
    <p className="guess">
      {range(5).map((value, index) => (
        <span className={`cell ${checkedArray ? checkedArray[index].status : ''}`} key={index}>{newGuess ? newGuess[index] : ''}</span>
      ))}
    </p>
  );
}

export default Guess;
