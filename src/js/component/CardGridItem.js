import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardGridItem = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(()=>{
        actions.obtienePersonaje(params.theid);
    },[])
    return (
        <div className="card"  style={{width: "18rem"}}>
            <img src="https://img.icons8.com/ios/50/000000/star-wars.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{store.personaje.properties?.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="..." className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};

CardGridItem.propTypes = {
    match: PropTypes.object
};
