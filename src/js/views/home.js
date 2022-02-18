import React from "react";
import "../../styles/home.css";
import { CardGrid } from "../component/CardGrid";
import { PlanetGrid} from "../component/PlanetGrid";

export const Home = () => (
	<div className="container-md">
		<h2 className="text-center">
			<span className="text-danger ">Characters</span>
		</h2>
		<CardGrid />
		<hr></hr>
		<h2 className="text-center">
		<span className="text-danger">Planets</span>
		</h2>
		<PlanetGrid />
	</div>
);
