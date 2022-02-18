const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje:{},
			planeta:{},
			favoritos:[]
		},
		actions: {
			obtenerPersonajes: ()=>{
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then(data => setStore({personajes: data.results}))
			},
			obtienePersonaje: (id)=>{
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then((response)=>response.json())
				.then(data => setStore({personaje: data.result}))
			},
			obtenerPlanetas: ()=>{
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then(data => setStore({planetas: data.results}))
			},
			obtienePlaneta: (id)=>{
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then((response)=>response.json())
				.then(data =>setStore({planeta:data.result}))
			},
			guardaFavoritos(nombreItem){
				const store = getStore();
				const fav = store.favoritos;
				const newFav = [...fav, { name: nombreItem, id:fav.length }]
				setStore({favoritos: newFav})
			},

			eliminaFavorito(id){
				const store = getStore();
				const fav = store.favoritos;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({favoritos: favActualizado})
			}
		}			
	};
};

export default getState;
