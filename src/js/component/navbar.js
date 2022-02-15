import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          className="navbar-brand mb-0 h1"
          src="https://img.icons8.com/ios/50/000000/star-wars.png"/>
      </Link>
      <div className="ml-auto">
        <Link to="/">
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul></div>
        </Link>
      </div>
    </nav>
  );
};
