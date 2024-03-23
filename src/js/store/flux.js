const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
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
				const isFavorite = store.favorites.some(objeto => objeto.name === data.name);
				if (!isFavorite) {
					const newFav = { ...data, type: type };
					const updateFavorites = [...store.favorites, newFav];
					setStore({ favorites: updateFavorites })
				} else { 
					const updateFav = store.favorites.filter(element => element.name !== data.name)
					setStore({ favorites: updateFav })
				};
			},

			removeFav: (index) => {
				const store = getStore();
				const updateFav = store.favorites.filter((_, i) => i != index);
				setStore({ favorites: updateFav })
			},

			getNewChrPage: async (chrPage) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people?page=${chrPage}&limit=10`);
					const data = await response.json();
					setStore({ allCharacters: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			getNewPltPage: async (pltPage) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets?page=${pltPage}&limit=10`);
					const data = await response.json();
					setStore({ allPlanets: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			getNewVhlPage: async (vhlPage) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles?page=${vhlPage}&limit=10`);
					const data = await response.json();
					setStore({ allVehicles: data.results });
				} catch (error) {
					console.error(error);
				}
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
