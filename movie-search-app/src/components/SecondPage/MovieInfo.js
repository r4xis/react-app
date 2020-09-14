import React, { Component } from "react";
import "./SecondPage.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  ListGroupItemHeading,
} from "reactstrap";

class MovieInfo extends Component {
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
                {this.props.title}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                RUNTIME
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.runtime}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                TYPE
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.type}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                GENRE
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.genre}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                DIRECTOR
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.director}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-eaea">
              <ListGroupItemHeading className="header">
                ACTORS
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.actors}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-dede">
              <ListGroupItemHeading className="header">
                IMDB RATING
              </ListGroupItemHeading>
              <ListGroupItemText className="text">
                {this.props.imdb_rating}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div>
          <img src={this.props.poster} alt="" />
        </div>
      </div>
    );
  }
}

export default MovieInfo;
