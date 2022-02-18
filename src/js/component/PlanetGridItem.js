import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetGridItem = ({ item }) => {
    const { store, actions } = useContext(Context);
    const id = item.url.split("/")[5];
    return (
        <div className="col">
            <div className="card text-dark bg-light border-dark mb-3" style={{ width: "18rem", border: "1px solid gray", borderRadius: "6px", marginBottom: "10px", marginRight: "10px", overflow: "hidden" }}>
                <img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {item.name}</h5>
                    <p className="card-text">Terrain: {item.terrain}</p>
                    <p className="card-text">Population: {item.population}</p>
                    <hr></hr>
                    <Link className="btn btn-outline-primary" to={`/singleP/${id}`}>Learn more</Link>
                    <button className="btn btn-outline-warning" onClick={() => { actions.guardaFavoritos(item.name) }}><i className="fas fa-fire"></i></button>
                </div>
            </div>
        </div>

    );
};
PlanetGridItem.propTypes = {
    match: PropTypes.object
};
