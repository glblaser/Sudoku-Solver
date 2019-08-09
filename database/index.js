const mongoose = require('mongoose');

const Schema = mongoose.Schema

const puzzleSchema = new mongoose.Schema({
  _id: String,
  quizzes: String,
  solutions: String
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema, 'puzzle');

module.exports = { Puzzle };