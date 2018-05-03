import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title : React.propTypes.number,
    poster : React.propTypes.string
  }
  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return(
      <img src={this.props.poster} alt=""/>
    )
  }
}
export default Movie;