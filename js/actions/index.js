//computer generates a number between 1 and 100
//user guesses number between 1 and 100
//notify user if hot or cold
//start new game

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