import React,{useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark mb-3 container">
      <Link to="/">
        <img
          className="navbar-brand mb-0 h1"
          src="https://img.icons8.com/ios/50/000000/star-wars.png" />
      </Link>
      <div className="ml-auto">
        <Link to="/">
          <div className="nav-item dropdown">
            <span className="nav-link dropdown-toggle bg-primary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites {store.favoritos.length}</span>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {store.favoritos.map((item) => {
                return <li><a className="dropdown-item"> <span onClick={() => { actions.eliminaFavorito(item.id) }} className={"fa fa-trash"}></span>{item.name}</a></li>
              })}
            </ul></div>
        </Link>
      </div>
    </nav>
  );
};
