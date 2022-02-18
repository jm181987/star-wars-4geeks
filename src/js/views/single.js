import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.obtienePersonaje(params.theid);
	}, [])
	return (
		<div className="d-flex flex-row container ">
			<div classNameName="card mb-3" style={{ "maxWidth": "800px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://img.icons8.com/ios/50/000000/star-wars.png" className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.personaje.properties?.name}</h5>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
				<div className="row text-danger">
					<div className="col-2 text-center">
						<p>Name</p>
						<p>{store.personaje.properties?.name}</p>
					</div>
					<div className="col-2 text-center">
						<p>Birth Year</p>
						<p>{store.personaje.properties?.birth_year}</p>
					</div>
					<div className="col-2 text-center">
						<p>Gender</p>
						<p>{store.personaje.properties?.gender}</p>
					</div>
					<div className="col-2 text-center">
						<p>Height</p>
						<p>{store.personaje.properties?.height}</p>
					</div>
					<div className="col-2 text-center">
						<p>Skin Color</p>
						<p>{store.personaje.properties?.skin_color}</p>
					</div>
					<div className="col-2 text-center">
						<p>Eye Color</p>
						<p>{store.personaje.properties?.eye_color}</p>
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
