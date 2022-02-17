import React from "react";
import "../../styles/home.css";
import { CardGrid } from "../component/CardGrid";
import { PlanetGrid} from "../component/PlanetGrid";

export const Home = () => (
	<div >
		<h3>
			Characters
		</h3>
		<CardGrid />
		<h3>
			Planets
		</h3>
		<PlanetGrid />
	</div>
);
