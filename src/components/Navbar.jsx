import React, { Component } from "react";

//Stateless functional components
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.google.ca">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// Instead of using a class
// class NavBar extends Component {
//   render() {
//    );
//   }
// }

export default NavBar;
