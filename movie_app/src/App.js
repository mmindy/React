import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie.js";

// 방대한 양의 api 자료 정리 위해 배열 내 객체로 개별 영화 정리
const movies = [
  {
    title:"Matrix",
    poster: "https://pbs.twimg.com/profile_images/2312061576/3hhbt70o0pns6ofmss0t_400x400.png"
  },
  {
    title: "Full Metal Jacket",
    poster: "http://poclanos.com/wp-content/uploads/2016/12/%EB%B8%8C%EB%A1%9C%EC%BD%9C%EB%A6%AC%EB%84%88%EB%A7%88%EC%A0%80-2-900x900.jpg"
  },
  {
    title: "Old Boy",
    poster: "http://bgbg.co.kr/static/images/blog/1257066760.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://i.pinimg.com/originals/ad/cd/99/adcd99f191964c2493fe1dabfb1ecbbe.jpg"

  }

]

class App extends Component {
  componentWillMount() {
    console.log(1);
  }

  componentDidMount() {
    console.log(3);
  }
  render() {
    console.log(2);
    return (
      <div className="App">
        {movies.map((movie, index) => <Movie title={movie.title} poster={movie.poster} key={index}/>)}
      </div>
    );
  }
}

export default App;
