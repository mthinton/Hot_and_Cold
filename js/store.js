import { createStore } from 'redux';
import hotAndCold from './reducers/hotandcold'

const store = createStore(hotAndCold, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store