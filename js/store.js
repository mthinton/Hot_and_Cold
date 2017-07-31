import { createStore, applyMiddleware } from 'redux';
import hotAndCold from './reducers/hotandcold';
import thunk from 'redux-thunk';

const store = createStore(hotAndCold, 
						window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
						applyMiddleware(thunk)
						);
export default store