import React from 'react';
import Header from './header';
import UserGuess from './userguess';
import { connect } from 'react-redux';
import {computerGenerate, beginGame, fetchFewestGuesses} from '../actions';
import Instructions from './Instructions';

class Game extends React.Component {

	componentDidMount() {
		
		this.props.dispatch(fetchFewestGuesses());
		this.props.dispatch(computerGenerate());
	}

	render() {
		return (
			<div>
				<Header />
				<div className="App-Content">
				{this.props.hideInstructions ? <UserGuess /> : <Instructions />}
				{this.props.hideInstructions ? '' : <button type="button" onClick={(e) => this.props.dispatch(beginGame())} >Begin New Game</button>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	hideInstructions: state.hideInstructions,
	fewestGuesses: state.fewestGuesses
})

export default connect(mapStateToProps)(Game);
