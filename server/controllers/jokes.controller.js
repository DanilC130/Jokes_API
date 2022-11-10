const joke = require('../models/jokes.model');
const mongoose = require('mongoose');

module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then(jokes => res.json({ allJokes: jokes }))
        .catch(err => res.json({ error: err }))
}

module.exports.findOneJokeById = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ oneJokeById: oneJoke }))
        .catch(err => res.json({ error: err }))
}
module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then(newJoke => res.json({ newJoke: newJoke }))
        .catch(err => res.json({ error: err }))
}

module.exports.findJokeAndUpdate = (req, res) => {
    joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) //MongoDB and Mongoose do not run validations on an edit out of the boc; must explicitly run runValidators.
        .then(data => res.json({ data: data }))
        .catch(err => res.json({ error: err }))

}

module.exports.findOneJokeAndDelete = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ error: err }))
}

module.exports.findRandomJoke = (req, res) => {
    joke.find()
    .then(jokes => {
        const randomJokeIndex = Math.floor(Math.random() * jokes.length)
        res.json({result: jokes[randomJokeIndex]})
    })
    .catch(err => res.json({ error: err }))
}