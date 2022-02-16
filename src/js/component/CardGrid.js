import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardGridItem } from "./CardGridItem";


export const CardGrid = () => {
    const { store, actions } = useContext(Context);
    console.log(store.personajes);
    return (
        <div className="d-flex flex-row bd-highlight mb-3">
            {store.personajes.map((item) => (<CardGridItem key={item.name} />))}
        </div>
    );
}