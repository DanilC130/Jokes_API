const jokes = require('../controllers/jokes.controller');


module.exports = (app) => {
    app.get("/api/jokes/", jokes.findAllJokes);
    app.get("/api/jokes/random", jokes.findRandomJoke);
    app.get("/api/jokes/:id", jokes.findOneJokeById);
    app.post("/api/jokes/new", jokes.createNewJoke);
    app.put("/api/jokes/update/:id", jokes.findJokeAndUpdate);
    app.delete("/api/jokes/delete/:id", jokes.findOneJokeAndDelete);
}