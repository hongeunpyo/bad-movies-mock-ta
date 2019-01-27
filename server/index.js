var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var morgan = require('morgan')
var {getGenreList, searchMovieByGenre} = require('./helpers/apiHelpers')
var cors = require('cors');

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup


//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

//OPTION 1: Use regular routes

app.get('/genres', function(req, res) {
  // make an axios request to get the official list of genres from themoviedb
  var genreList = getGenreList();
  // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
  console.log(genreList);
  genreList
    .then(function (response) {
      console.log(response.data.genres);
      res.send(response.data.genres);
    })
    .catch(function (err) {
      console.log(err);
    })
  // send back
});

app.get('/search', function(req, res) {
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
  console.log('GET REQUEST FROM CLIENT',req);
  var movieList = searchMovieByGenre();
  // and sort them by votes (worst first) using the search parameters in themoviedb API
  movieList
    .then(function (response) {
      console.log(response.query);
      // res.send(response)
    })
    .catch(function (err) {
      console.log(err);
    })
});


app.post('/save', function(req, res) {

  //save movie as favorite

});

app.post('/delete', function(req, res) {

  //remove movie from favorites

});

//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);

app.listen(3000, function () {
  console.log('listening on port 3000!');
});