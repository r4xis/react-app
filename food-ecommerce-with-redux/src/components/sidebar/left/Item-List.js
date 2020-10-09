import React from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const { name, items } = props;

  return (
    <Link
      to={{
        pathname: "/products",
        state: { name, items },
      }}
      className="link"
    >
      <ul className="category-list" tabIndex="1" autofocus="true">
        <i className="fas fa-angle-right"></i>
        <li className="item">{name}</li>
      </ul>
    </Link>
  );
};
export default ItemList;
