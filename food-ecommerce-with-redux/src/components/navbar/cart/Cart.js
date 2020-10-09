import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";

class Cart extends Component {
  priceSetting = (price) => {
    return price.toString().replace(".", ",").substring(0, 5);
  };
  render() {
    return (
      <Dropdown id="Dropdown">
        <div id="Cart">
          <Dropdown.Toggle>
            <i className="fas fa-shopping-cart"></i>
            <div className="amount">
              <p>{this.props.main.deliveryNum}</p>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="menu">
            {this.props.main.delivery.map(({ name, price, amount }, index) => (
              <Card className="cart-list" key={index}>
                <p className="name">
                  {amount} adet {name}
                </p>
                <p className="price">Fiyat: {price} TL</p>
              </Card>
            ))}
            <p className="totalPrice">
              Toplam: {this.priceSetting(this.props.main.totalPrice)} TL
            </p>
          </Dropdown.Menu>
        </div>
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps)(Cart);
