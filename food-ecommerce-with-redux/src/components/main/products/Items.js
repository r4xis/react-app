import React from "react";
import List from "./Item-List";

const Items = (props) => {
  const { name, items } = props.location.state;

  return (
    <div>
      <h1 id="Header">{name}</h1>
      <div id="Products">
        {items.map(({ name, price, image, subMenus }, index) => (
          <List
            key={index}
            name={name}
            price={price}
            image={image}
            subMenus={subMenus}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
