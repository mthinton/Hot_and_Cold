import React from 'react';
import {connect} from 'react-redux';
import {userGuess, newGame, saveFewestGuesses} from '../actions';

const UserGuess = ({submitUserGuess, correctAnswer, startNewGame, fewestGuesses, insertNewHighScore}) => {
	let count = 0;
	
	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();
				

				let userInput = e.target.userInput.value;
				
				if(!userInput.length){
					alert("Enter valid guess!")
				}
				else{
					count++;
					insertNewHighScore(userInput);

					submitUserGuess(userInput);
					if(userInput >= correctAnswer + 25){
						alert("Cold!")
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
							alert("You win");
							startNewGame()
					}	
								
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
	startNewGame: () => dispatch(newGame()),
	insertNewHighScore: (newHighScore) => dispatch(saveFewestGuesses(newHighScore))
});

const mapStateToProps = (state, props) => ({
	correctAnswer: state.randomNum,
	fewestGuesses: state.fewestGuesses
})

export default connect(mapStateToProps, mapDispatchToProps)(UserGuess);