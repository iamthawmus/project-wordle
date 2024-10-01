import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [hasWon, setHasWon] = React.useState('InProgress'); // 'Won' || 'Lost' || 'InProgress'
  const addNewGuess = (newGuessStr) => {
    const newGuess = {
      id: crypto.randomUUID(),
      text: newGuessStr
    }
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);

    if (newGuessStr === answer) {
      setHasWon('Won');
    }
    else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setHasWon('Lost');
    }

  }

  return (
    <>
      {hasWon !== 'InProgress' && <Banner hasWon={hasWon} guessCount={guessList.length} answer={answer} />}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput addNewGuess={addNewGuess} hasWon={hasWon} />
    </>
  );
}

export default Game;
