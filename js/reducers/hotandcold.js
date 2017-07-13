const hotAndCold = (state = [], action) => {
	switch(action.type){
		case 'COMP_GENERATE':
		return [...state, {
			compNum: Math.floor(Math.random() * 100)
		}];

		case 'USER_GUESS':
		return [...state,{
			userGuess:  action.userInput
		}];

		default:
		return state;
	};
}

export default hotAndCold