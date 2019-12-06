import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';
import { tsExternalModuleReference } from '@babel/types';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factor function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props  specific to this setup.
 * @return {ShallowWrapper} 
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
});
<<<<<<< HEAD
let wrapper;

beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
});

describe('if there are no words guessed', () => {
    test('renders without error', () => {
=======
let wrapper; 

beforeEach( () => {
    wrapper = setup({guessedWords: [] });
});

describe('if there are no words guessed', () => {
    test('renders without error' , () => {
>>>>>>> 62734cee0c8b19c24885695e0c91754f22779167
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

});

describe('if there are words guessed', () => {
<<<<<<< HEAD
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('it renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNode.length).toBe(guessedWords.length);
    });
=======
>>>>>>> 62734cee0c8b19c24885695e0c91754f22779167

})