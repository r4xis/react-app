import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Pagination from "./Pagination";
import "./HomePage.css";

class HomePage extends Component {
  state = {
    searchValue: "",
    data: [],
    firstItem: 0,
    submitCheck: false,
  };

  fetchApi = (search) => {
    fetch("http://www.omdbapi.com/?apikey=c2470fe1&s=" + search)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.Search }))
      .catch((e) => console.log("Connection error", e));
  };

  page1OnClick = (e) => {
    this.setState({
      firstItem: 0,
    });
  };

  page2OnClick = (e) => {
    this.setState({
      firstItem: 5,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchApi(this.state.searchValue);
    this.setState({
      submitCheck: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div id="search-results">
          {this.state.data
            .filter((movie) => movie.Poster !== "N/A" && movie.Type === "movie")
            .sort((a, b) => (a.Year > b.Year ? 1 : -1))
            .slice(this.state.firstItem, this.state.firstItem + 5)
            .map(({ Title, Year, Poster }, index) => (
              <SearchResults
                key={index}
                title={Title}
                year={Year}
                poster={Poster}
              />
            ))}
        </div>
        <Pagination
          submitCheck={this.state.submitCheck}
          data={this.state.data}
          firstItem={this.state.firstItem}
          page1OnClick={this.page1OnClick}
          page2OnClick={this.page2OnClick}
        />
      </div>
    );
  }
}

export default HomePage;
