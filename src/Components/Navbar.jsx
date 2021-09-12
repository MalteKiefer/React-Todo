import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchQuery }) => {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <div className="HeaderContent">
          <img style={{ width: 120 }} src={logo} alt="React-Logo" />
          <h1>React Todo</h1>
        </div>
      </Link>
      <div className="SearchInputContainer">
        <input
          className="InputItem"
          placeholder="Suche"
          onChange={onSearchQuery}
        />
      </div>
    </div>
  );
};

export default Navbar;
