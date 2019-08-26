const mongoose = require('mongoose');

const puzzleSchema = mongoose.Schema({
  _id: String,
  number: String,
  quizzes: String,
  solutions: String
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

module.exports = { Puzzle };