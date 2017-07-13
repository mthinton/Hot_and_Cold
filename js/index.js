require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

console.log(store.getState());
store.dispatch(actions.computerGenerate());
store.dispatch(actions.userGuess(57));
console.log(store.getState());
