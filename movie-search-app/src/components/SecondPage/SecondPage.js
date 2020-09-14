import React, { Component } from "react";
import "./SecondPage.css";
import MovieInfo from "./MovieInfo";
import Loading from "./Loading";

class SecondPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData(this.props.location.state.title);
  }

  fetchData = (title) => {
    fetch("http://www.omdbapi.com/?apikey=c2470fe1&t=" + title)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    if (this.state.data.length === 0) return <Loading />;
    return (
      <div id="second-page">
        <MovieInfo
          title={this.state.data.Title}
          runtime={this.state.data.Runtime}
          type={this.state.data.Type}
          genre={this.state.data.Genre}
          director={this.state.data.Director}
          actors={this.state.data.Actors}
          imdb_rating={this.state.data.imdbRating}
          poster={this.state.data.Poster}
        />
      </div>
    );
  }
}

export default SecondPage;
