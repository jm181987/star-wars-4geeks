import React from "react";
import "../../styles/home.css";
import { CardGrid } from "../component/CardGrid";
import { PlanetGrid} from "../component/PlanetGrid";

export const Home = () => (
	<div >
		<h3 className="text-center">
			<span className="text-danger ">Characters</span>
		</h3>
		<CardGrid />
		<hr></hr>
		<h3 className="text-center">
		<span className="text-danger">Planets</span>
		</h3>
		<PlanetGrid />
	</div>
);
