import React from 'react';
import axios from 'axios';
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
    };

  }

  componentDidMount() {
    this.getGenres();
  }

  updateOptions() {
    var genre = this.state.genres
    var storage = [];
    for (var i = 0; i < genre.length; i++) {
      var option = <option key = {genre[i].id} value={genre[i].id}>{genre[i].name}</option>
      storage.push(option);
    }
    return storage;
  }



  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    var that = this
    axios.get(`http://localhost:3000/genres`)
    .then(function (response) {
        that.setState({ genres: response.data });
      })
      .catch(function (error) {
        console.log('error is being thrown', error);
      })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => { this.props.swapFavorites() }}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select onChange={this.props.handleChange}>
          {this.updateOptions()}

        </select>
        <br /><br />

        <button>Search</button>

      </div>
    );
  }
}

export default Search;