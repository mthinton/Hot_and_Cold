import React from 'react';
import {connect} from 'react-redux';
import {userGuess} from '../actions';
import {newGame} from '../actions';

const UserGuess = ({submitUserGuess, correctAnswer, startNewGame}) => {
	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();

				let userInput = e.target.userInput.value;
				submitUserGuess(userInput);
				if(userInput >= correctAnswer + 25){
					alert("Cold")
				}
				else if(userInput <= correctAnswer - 25){
					alert("Cold")
				}
				else if(userInput >= correctAnswer + 10){
					alert("Getting warmer!")
				}
				else if(userInput <= correctAnswer - 10){
					alert("Getting warmer!")
				}
				else if(userInput >= correctAnswer + 4 ){
					alert("So warm!")
				}
				else if(userInput <= correctAnswer - 4){
					alert("So warm!")
				}
				else if(userInput >= correctAnswer + 1){
					alert("You're scalding!")
				}
				else if(userInput <= correctAnswer - 1){
					alert("You're scalding")
				}
				else if(userInput == correctAnswer){
					alert("You win!");
					startNewGame();

				}

			}}>
				<input type='text' name='userInput' ></input>
				<button type='submit'>Submit</button>
			</form>
		</div>

	);
}

const mapDispatchToProps = (dispatch) => ({
	submitUserGuess: (number) => dispatch(userGuess(number)),
	startNewGame: () => dispatch(newGame())
});

const mapStateToProps = (state, props) => ({
	correctAnswer: state.randomNum,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserGuess);