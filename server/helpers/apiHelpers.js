const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
var getGenreList = function() {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (err) {
    return err;
  })
}

// const getBreeds = async () => {
//   try {
//     return await axios.get('https://dog.ceo/api/breeds/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {getGenreList : getGenreList};