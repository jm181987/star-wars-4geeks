import React from "react";
import "../../styles/home.css";
import { CardGrid } from "../component/CardGrid";

export const Home = () => (
	<div >
		<h3>
			Characters
		</h3>
		<CardGrid />
		<h3>
			Planets
		</h3>
	</div>
);
