import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetGridItem} from "./PlanetGridItem";


export const PlanetGrid = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="d-flex flex-row container-md">
            {store.planetas.map((item,i) => (<PlanetGridItem key={i} item={item} />))}
        </div>
    );
}