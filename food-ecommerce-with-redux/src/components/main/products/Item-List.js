import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  newDelivery,
  deliveryNum,
  totalPrice,
} from "../../../actions/mainAction";

class ItemList extends Component {
  state = {
    amount: 1,
  };

  Price = (price, amount) => {
    let newPrice = price.toString();
    newPrice = parseFloat(newPrice.replace(",", "."));
    newPrice *= amount;
    return newPrice;
  };

  priceSetting = (price) => {
    return price.toString().replace(".", ",").substring(0, 5);
  };

  handleDecrement = () => {
    if (this.state.amount === 1) return;
    this.setState({
      amount: this.state.amount - 1,
    });
  };

  handleIncrement = () => {
    this.setState({
      amount: this.state.amount + 1,
    });
  };

  handleDelivery = () => {
    const newPrice = this.Price(this.props.price, this.state.amount);
    this.props.newDelivery({
      name: this.props.name,
      price: this.priceSetting(newPrice),
      amount: this.state.amount,
    });
    this.props.deliveryNum(this.props.main.deliveryNum + 1);
    this.props.totalPrice(this.props.main.totalPrice, newPrice);
    this.setState({
      amount: 1,
    });
  };
  render() {
    const { name, price, image } = this.props;
    const req = require.context("../../../", true);
    const img_link = req(image);

    return (
      <div className="menu-cards">
        <Card className="menu-card">
          <Card.Img className="menu-image" src={img_link} />
          <Card.Body>
            <Card.Title className="menu-text menu-name">{name}</Card.Title>
            <Card.Title className="menu-text menu-price">{price} TL</Card.Title>
            <div className="amountButtonGroup">
              <button
                className="decrement amountButton"
                onClick={this.handleDecrement}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="amount">{this.state.amount}</span>
              <button
                type="button"
                className="increment amountButton"
                onClick={this.handleIncrement}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={this.handleDelivery}
            >
              Sepete Ekle
            </Button>
          </Card.Body>
        </Card>
        <p>{this.state.totalPrice}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps, {
  newDelivery,
  deliveryNum,
  totalPrice,
})(ItemList);
