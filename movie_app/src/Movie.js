import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

/*
// Smart Component
class Movie extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <MoviePoster poster={this.props.poster}/>
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
*/

// Dumb Component
function Movie ( {title, poster}) {
  return (
      <div>
        <h1>{title}</h1>
        <MoviePoster poster={poster}/>
      </div>
  )
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired
}
function MoviePoster ( {poster} ) {
  return (
    <img src={poster} alt=""/>
  )
}

MoviePoster.propTypes = {
  poster : PropTypes.number.isRequired
}
export default Movie;