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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating');
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })

    return movies;
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
