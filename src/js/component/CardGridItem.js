import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardGridItem = ({ item }) => {
    const { store, actions } = useContext(Context);
    const id = item.url.split("/")[5];


    return (
        <div className="col">
            <div className="card text-dark bg-light border-dark mb-3" style={{ width: "18rem", border: "1px solid gray", borderRadius: "6px", marginBottom: "10px", marginRight: "10px", overflow: "hidden" }}>
                <img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {item.name}</h5>
                    <p className="card-text">Gender: {item.gender}</p>
                    <p className="card-text">Hair Color: {item.hair_color}</p>
                    <p className="card-text">Eye Color: {item.eye_color}</p>
                      <hr></hr>
                    <Link className="btn btn-outline-primary" to={`/single/${id}`}>Learn more</Link>
                    <button className="btn btn-outline-warning" onClick={() => { actions.guardaFavoritos(item.name) }}><i className="fas fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

CardGridItem.propTypes = {
    match: PropTypes.object
};
