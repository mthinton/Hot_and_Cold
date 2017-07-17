import React from 'react';
import Header from './header';
import UserGuess from './userguess';
import { connect } from 'react-redux';
import {computerGenerate} from '../actions';
import Instructions from './Instructions';

class Game extends React.Component {

	componentDidMount() {
		this.props.dispatch(computerGenerate());
	}

	render() {
		return (
			<div>
				<Header />
				<div className="App-Content">
				<Instructions />
				<UserGuess />
				</div>
			</div>
		);
	}
}

export default connect()(Game);