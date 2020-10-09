import React from "react";
import List from "./Item-List";

const Items = (props) => {
  const { items } = props;

  return items !== undefined ? (
    <div>
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
  ) : null;
};

export default Items;
