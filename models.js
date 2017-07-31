const mongoose = require('mongoose');

const guessSchema = mongoose.Schema({
	fewestGuesses: {type: Number, required: true}
})

const Guess = mongoose.model('Guess', guessSchema);

module.exports = {Guess};
