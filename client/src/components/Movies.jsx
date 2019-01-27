import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }

  renderMoviesDynamically() {
    var movies = this.props.movies;
    var storage = [];
    for (var i = 0; i < movies.length; i++) {
      var li = (
      <li className="movie_item" key={movies[i].id}>
      <img src={'https://image.tmdb/org/t/p/w185_and_h278_bestv2/' + movies[i].poster_path} />
      <div className="movie_description">
        <h2>{movies[i].title}</h2>
        <section className="movie_details">
          <div className="movie_year">
            <span className="title">Year</span>
            <span>{movies[i].release_date}</span>
          </div>
          <div className="movie_rating">
            <span className="title">Rating</span>
            <span>{movies[i].vote_average}</span>
          </div>
        </section>
      </div>
      </li>
      );
      storage.push(li);
    }
    return storage;
  }
  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">


        {/* Make this list dynamic! */}
      {this.renderMoviesDynamically()}

      </ul>
    );
  }
}

export default Movies;