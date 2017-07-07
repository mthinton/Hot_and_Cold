//computer generates a number between 1 and 100
//user guesses number between 1 and 100
//notify user if hot or cold
//start new game

export const COMP_GENERATE = 'COMP_GENERATE';
export const computerGenerate = (computerNum) => ({
	type: COMP_GENERATE,
	computerNum
})

export const USER_GUESS = 'USER_GUESS';
export const userGuess = userInput => ({
	type: USER_GUESS,
	userInput
})

export const HOT_OR_COLD = 'HOT_OR_COLD';
export const hotCold = (computerNum, userInput) => ({
	type: HOT_OR_COLD,
	computerNum,
	userInput
}) 

export const NEW_GAME = 'NEW_GAME';
export const newgame = (correctAnswer) => ({
	type: NEW_GAME,
	correctAnswer
})