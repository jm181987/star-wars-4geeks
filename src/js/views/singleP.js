import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleP= props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.obtienePlaneta(params.theid);
	}, [])
	console.table(store.planeta.properties);
	return (
		<div className="d-flex flex-row container ">
			<div className="card mb-3" style={{ "maxWidth": "800px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} 
						onError={(e) => {
							e.target.onerror = null
							e.target.src = 'https://technabob.com/blog/wp-content/uploads/2010/10/101810_rg_Stormtrooper404_01.jpg'
						}} 
						className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.planeta.properties?.name}</h5>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
				<div className="row text-danger">
					<div className="col-2 text-center">
						<p>Name</p>
						<p>{store.planeta.properties?.name}</p>
					</div>
					<div className="col-2 text-center">
					<p>Climate</p>
					<p>{store.planeta.properties?.climate}</p>
				</div>
				<div className="col-2 text-center">
					<p>Population</p>
					<p>{store.planeta.properties?.population}</p>
				</div>
				<div className="col-2 text-center">
					<p>Orbital Period</p>
					<p>{store.planeta.properties?.orbital_period}</p>
				</div>
				<div className="col-2 text-center">
					<p>Rotation Period</p>
					<p>{store.planeta.properties?.rotation_period}</p>
				</div>
				<div className="col-2 text-center">
					<p>Diameter</p>
					<p>{store.planeta.properties?.diameter}</p>
				</div>
				</div>	
			</div>
			

		</div>
	);
};

SingleP.propTypes = {
	match: PropTypes.object
};
