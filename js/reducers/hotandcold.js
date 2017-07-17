const initialState = {
	randomNum : null,
	userGuesses : []
};

const hotAndCold = (state = initialState, action) => {
	switch(action.type){
		case 'COMP_GENERATE':
		return {
			...state, 
			randomNum: Math.floor(Math.random() * 100)
		}
		

		case 'USER_GUESS':
		return {
			...state,
			userGuesses: [...state.userGuesses, {number:  action.number, id: action.id}]
		}

		case 'NEW_GAME':
		return {
			...state,
			randomNum: Math.floor(Math.random() * 100)
		}

		default:
		return state;
	};
}

export default hotAndCold