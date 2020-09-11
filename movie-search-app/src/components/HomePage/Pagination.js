import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div>
        {this.props.submitCheck &&
        this.props.data.filter(
          (movie) => movie.Poster !== "N/A" && movie.Type === "movie"
        ).length > 5 ? (
          <div className="pagination">
            <a
              className="page1"
              id="page1"
              href="/#"
              onClick={this.props.page1OnClick}
              style={{
                backgroundColor: !this.props.firstItem
                  ? "rgb(15, 152, 197)"
                  : "#fff",
                color: !this.props.firstItem ? "#fff" : "rgb(15, 152, 197)",
              }}
            >
              1
            </a>
            <a
              className="page2"
              href="/#"
              onClick={this.props.page2OnClick}
              style={{
                backgroundColor: this.props.firstItem
                  ? "rgb(15, 152, 197)"
                  : "#fff",
                color: this.props.firstItem ? "#fff" : "rgb(15, 152, 197)",
              }}
            >
              2
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Pagination;
