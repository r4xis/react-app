import React, { Component } from "react";
import { Link } from "react-router-dom";
class SearchResults extends Component {
  render() {
    const { title, year, poster } = this.props;
    return (
      <div>
        <Link
          to={{
            pathname: "/movie-info",
            state: { title },
          }}
        >
          <img src={poster} alt="movie-poster" />
          <div className="title">
            <p>{title}</p>
            <p>{year}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default SearchResults;
