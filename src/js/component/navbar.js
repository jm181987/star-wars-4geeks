import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 container">
      <Link to="/">
        <img
          style={{ objectFit: "cover" }}
          className="navbar-brand mb-0 h1"
          src="https://pngimg.com/uploads/starwars/starwars_PNG21.png" />
      </Link>
      <div className="ml-auto">
        <Link to="/">
          <div className="nav-item dropdown">
            <span className="nav-link dropdown-toggle bg-secondary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
