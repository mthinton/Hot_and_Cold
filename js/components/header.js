import React from 'react';
import {connect} from 'react-redux';

function Header(props){
	return (
		<div>
			<h1>Hot and Cold App</h1>
			<h3>Current Best Score {props.bestScore}</h3>

		</div>
	);
}

const mapStateToProps = (state) => ({
	bestScore : state.fewestGuesses 
})
export default connect(mapStateToProps)(Header)