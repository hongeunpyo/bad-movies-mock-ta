import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
      genreKey: 28
    };
    
    // you might have to do something important here!
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange(event) {
    this.setState({ genreKey: event.target.value })
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    var that = this;
    Axios.get(`http://localhost:3000/search?id=${that.state.genreKey}`)
      .then(function (response) {
        console.log(response.data)
        that.setState({ movies: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        <div className="main">
          <Search handleChange={this.handleChange} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));