import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetGridItem} from "./PlanetGridItem";


export const PlanetGrid = () => {
    const { store, actions } = useContext(Context);
    console.log(store.planetas);
    return (
        <div className="d-flex flex-row container">
            {store.planetas.map((item,i) => (<PlanetGridItem key={i} item={item} />))}
        </div>
    );
}