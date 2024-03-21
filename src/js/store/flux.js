const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			allCharacters: [],
			allVehicles: [],
			allPlanets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getAllCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					setStore({ allCharacters: data.results });
					console.log(data);
				} catch (error) {
					console.error(error);
				}
			},
			getAllVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await response.json();
					setStore({ allVehicles: data.results });
				} catch (error) {
					console.error(error);
				}
			},
			getAllPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/");
					const data = await response.json();
					setStore({ allPlanets: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			addFavorite: (data, type) => {
				const store = getStore();
				const newFav = {...data, type: type};
				const updateFavorites = [...store.favorites, newFav];
				setStore({favorites: updateFavorites})
			},

			removeFav: (index) => {
				const store = getStore();
				const updateFav = store.favorites.filter((_, i) => i != index );
				setStore({favorites: updateFav})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
