import React from 'react';

function GuessInput({ addNewGuess, hasWon }) {
  const [guess, setGuess] = React.useState('');

  const onChange = (event) => {
    const newGuess = event.target.value;
    setGuess(newGuess.toUpperCase());
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({guess});
    addNewGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={onSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={onChange}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        disabled={hasWon !== 'InProgress'}
      />
    </form>
  );
}

export default GuessInput;
