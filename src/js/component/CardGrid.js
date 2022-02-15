import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const CardGrid = () => {
    const { store, actions } = useContext(Context);
    console.log(store.personajes);
    return (
        <div className="card-grid">
            {store.personajes.map((item) => <li>{item.name}</li>)}
        </div>
    );
}