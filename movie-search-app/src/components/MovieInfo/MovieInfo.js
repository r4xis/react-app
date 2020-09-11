import React, { Component } from "react";
import "./MovieInfo.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
} from "reactstrap";

class MovieInfo extends Component {
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
    return (
      <div id="movie-info">
        <Container>
          <ListGroup className="list-group text-center">
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                TITLE
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Title}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                RUNTIME
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Runtime}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                TYPE
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Type}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                GENRE
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Genre}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                DIRECTOR
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Director}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                ACTORS
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.Actors}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                IMDB RATING
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.state.data.imdbRating}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div>
          <img src={this.state.data.Poster} alt="" />
        </div>
      </div>
    );
  }
}

export default MovieInfo;
