import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form id="search-bar" onSubmit={this.props.handleSubmit}>
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            onChange={this.props.handleChange}
          />
          <button className="search-button" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
