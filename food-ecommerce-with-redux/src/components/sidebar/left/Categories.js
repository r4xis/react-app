import React, { Component } from "react";
import { connect } from "react-redux";
import Mapping from "./Item-Mapping";

import { getCategories } from "../../../actions/sideAction";

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props.categories;

    return categories !== undefined ? (
      <div id="Sidebar">
        <h2 className="header">Kategoriler</h2>
        {categories.map(({ key, description, items }) =>
          key === "main" ? (
            <Mapping key={key} description={description} items={items} />
          ) : null
        )}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(Categories);
