//computer generates a number between 1 and 100
//user guesses number between 1 and 100
//notify user if hot or cold
//start new game
export const BEGIN_GAME = 'BEGIN_GAME';
export const beginGame = () => ({
	type: BEGIN_GAME
})

export const COMP_GENERATE = 'COMP_GENERATE';
export const computerGenerate = () => ({
	type: COMP_GENERATE
})

export const USER_GUESS = 'USER_GUESS';
export const userGuess = number => ({
	type: USER_GUESS,
	number,
	id: Math.random()
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
})

export const UPDATE_STATE = 'UPDATE_STATE';
export const updateState = (newHighScore) => ({
	type: UPDATE_STATE,
	newHighScore
})

export const fetchFewestGuesses = () => {
	return dispatch => {
		fetch('http://localhost:8081/fewest-guesses')
		.then(response => response.json())
		.then(response => dispatch(updateState(response)))
		.catch(ex => console.log('Someone had one job and they couldnt even do that'))
	}
}

export const saveFewestGuesses = (newHighScore) => {
	console.log("PUT Request here");
	return dispatch => {
		fetch('http://localhost:8081/fewest-guesses', {
			method: 'PUT',
			body: JSON.stringify({fewestGuesses: newHighScore}),
		})
		.then(response => response.json())
		.then( data => dispatch(updateState(data.fewestGuesses)))
		.catch(ex => console.log("Error!"))
	}
}