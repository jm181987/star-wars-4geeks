import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardGridItem } from "./CardGridItem";


export const CardGrid = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="d-flex flex-row overflow-scroll">
            {store.personajes.map((item,i) => (<CardGridItem key={i} item={item} />))}
        </div>
    );
}