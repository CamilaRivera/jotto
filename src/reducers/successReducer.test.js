import { actionTypes } from '../actions';
import  successReducer  from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {}); // when you test a reducr with a swtich, you have to pass an object for an action when testing otherwise you will get an error 
    expect(newState).toBe(false);
});

test('return state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});