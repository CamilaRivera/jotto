import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const GuessedWords = ({ guessedWords }) => {
    let content
    if (guessedWords.length === 0) {
        content = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRows = guessedWords.map((word, index) => {
            return(
                <tr data-test="guessed-word" key={index}> 
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            )
        })
        content = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        )
=======
const GuessedWords = ({guessedWords}) => {
    let content
    if(guessedWords.length === 0){
        content = (
            <span data-test="guess-instructions">
              Try to guess the secret word!  
            </span>
        )
>>>>>>> 62734cee0c8b19c24885695e0c91754f22779167
    }
    return (
        <div data-test="component-guessed-words">
            {content}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,

            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GuessedWords;