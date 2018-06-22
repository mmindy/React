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
function Movie ( {title, poster, genres, synopsis}) {
  return (
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Columns">
          <h1>{title}</h1>
          <div className="Movie__Genres">
            {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
          </div>
          <p className="Movie__Synopsis">{synopsis}</p>
        </div>
      </div>
  )
}

function MoviePoster ( {poster, alt} ) {
  return (
    <img src={poster} alt={alt} className="Movie__Poster"/>
  )
}

function MovieGenre ( {genre} ) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre : PropTypes.string.isRequired
}



export default Movie;