import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie.js";

// 방대한 양의 api 자료 정리 위해 배열 내 객체로 개별 영화 정리

class App extends Component {
  // componentWillMount() {
  //   console.log(1);
  // }


  state = {
    
  }

  componentDidMount() {
    setTimeout(_=> {
      this.setState({
        movies : [
          {
            title:"Minions 01",
            poster: "https://thenypost.files.wordpress.com/2015/07/minions.jpg?quality=90&strip=all&w=618&h=410&crop=1"
          },
          {
            title: "Minions 02",
            poster: "https://pmcvariety.files.wordpress.com/2013/07/minions-2.jpg?w=1000&h=563&crop=1"
          },
          {
            title: "Minions 03",
            poster: "http://eparxies.gr/wp-content/uploads/2018/01/minios-696x377.png"
          },
          {
            title: "Minions 04",
            poster: "http://fotografias.antena3.com/clipping/cmsimages02/2017/05/25/A3DA99EB-325D-4067-AE96-D00EAA5C22CA/58.jpg"
          },
          {
            title : "Monions !!!",
            poster: "https://mountainx.com/wp-content/uploads/2015/07/minions.png"
          }
        ]
      })
    }, 5000)
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
