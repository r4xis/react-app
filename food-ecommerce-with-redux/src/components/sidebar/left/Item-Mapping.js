import React from "react";
import List from "./Item-List";

const MainList = (props) => {
  const { items } = props;
  return (
    <div className="category-map">
      {items.map(({ name, caption, items }, index) => (
        <List key={index} name={name} caption={caption} items={items} />
      ))}
    </div>
  );
};
export default MainList;
