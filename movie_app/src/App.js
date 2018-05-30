import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie.js";

// 방대한 양의 api 자료 정리 위해 배열 내 객체로 개별 영화 정리

class App extends Component {
  // componentWillMount() {
  //   console.log(1);
  // }
  state = {}
  
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then( response => response.json())
    .then( json => json.data.movies )
    .catch( err => console.log(err) );
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading~~'}
      </div>
    );
  }
}

export default App;
