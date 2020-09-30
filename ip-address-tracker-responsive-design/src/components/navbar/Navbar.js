import React from "react";

const Navbar = (props) => {
  return (
    <div id="Navbar">
      <h1 className="header">IP Address Tracker</h1>
      <form id="Searchbar" onSubmit={props.handleSubmit}>
        <input
          className="search-box"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={props.handleChange}
        />
        <button
          className="search-button"
          type="submit"
          onSubmit={props.handleSubmit}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
