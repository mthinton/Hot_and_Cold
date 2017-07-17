require('babel-polyfill');

import React from 'react';
import {render} from 'react-dom';
import * as actions from './actions/index';
import store from './store';
import {Provider} from 'react-redux';
import Game from './components/game';

render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app')
	);
