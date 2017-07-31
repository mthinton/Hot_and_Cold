const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');

mongoose.connect(DATABASE_URL);
const {Guess} = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

app.get('/fewest-guesses', (req, res) => {
	Guess
		.findOne()
		.then(bestScore => {
			res.json(bestScore.fewestGuesses)
		})
		.catch(
			err => {
				console.error(err);
				res.status(500).json({message: 'Internal server error'});
		})
})

app.put('/fewest-guesses', (req, res) => {
	console.log("Hello, world")
	Guess
	.findOne(function(err, doc) {
			doc.fewestGuesses = req.body.fewestGuesses;
			doc.save();
		})
	.then(
		response => {
			res.json(response)
		})
		
	.catch(
		err => 
			res.status(500).json({message: 'Internal server error'}))
});

app.listen(process.env.PORT || 8081, () => console.log(
	`Your app is listening on port ${process.env.PORT || 8081}`));
