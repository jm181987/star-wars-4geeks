const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje:{}
		},
		actions: {
			obtenerPersonajes: ()=>{
				fetch('https://www.swapi.tech/api/people')
				.then((response)=>response.json())
				.then(data => setStore({personajes: data.results}))
			},
			obtienePersonaje: (id)=>{
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then((response)=>response.json())
				.then(data => setStore({personaje: data.result}))
			}
		}			
	};
};

export default getState;
