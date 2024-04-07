import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			allCharacters: JSON.parse(localStorage.getItem("allCharacters")) || [],
			allVehicles: JSON.parse(localStorage.getItem("allVehicles")) || [],
			allPlanets: JSON.parse(localStorage.getItem("allPlanets")) || [],
		},
		actions: {


			getAllCharacters: async () => {
				const store = getStore()
				console.log(store.allCharacters.length);
				try {
					if (store.allCharacters.length === 0) {
						const response = await fetch("https://www.swapi.tech/api/people/");
						if (!response.ok) {
							throw new Error("Error al obtener los personajes de la API");
						}
						const data = await response.json();
						const characters = data.results;
						localStorage.setItem("allCharacters", JSON.stringify(characters));
						await setStore({ allCharacters: characters });
					}
				} catch (error) {
					console.error(error);
				}
			},
			getAllVehicles: async () => {
				const store = getStore()
				try {
					if (store.allVehicles.length === 0) {
						const response = await fetch("https://www.swapi.tech/api/vehicles/");
						if (!response.ok) {
							throw new Error("Error al obtener los vehiculos de la API");
						}
						const data = await response.json();
						const allVehicles = data.results;
						localStorage.setItem("allVehicles", JSON.stringify(allVehicles));
						await setStore({ allVehicles });
					}
				} catch (error) {
					console.error(error);
				}
			},
			getAllPlanets: async () => {
				const store = getStore()
				try {
					if (store.allPlanets.length === 0) {
						const response = await fetch("https://www.swapi.tech/api/planets/");
						if (!response.ok) {
							throw new Error("Error al obtener los planetas de la API");
						}
						const data = await response.json();
						const allPlanets = data.results;
						localStorage.setItem("allPlanets", JSON.stringify(allPlanets));
						await setStore({ allPlanets });
					}
				} catch (error) {
					console.error(error);
				}
			},

			addFavorite: (data, type) => {
				const store = getStore();
				const isFavorite = store.favorites.some(objeto => objeto.name === data.name);
				if (!isFavorite) {
					const newFav = { ...data, type: type, fav: true };
					const updateFavorites = [...store.favorites, newFav];
					localStorage.setItem("favorites", JSON.stringify(updateFavorites));
					setStore({ favorites: updateFavorites });

				} else {
					const updateFav = store.favorites.filter(element => element.name !== data.name);
					setStore({ favorites: updateFav });
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				};
			},

			removeFav: (index) => {
				const store = getStore();
				const updateFav = store.favorites.filter((_, i) => i != index);
				setStore({ favorites: updateFav })
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			},


			getNewChrPage: async (chrPage) => {
				if (chrPage != 1) {
					for (let index = 2; index < 10; index++) {
						try {
							const store = getStore();
							const response = await fetch(`https://www.swapi.tech/api/people?page=${index}&limit=10`);
							const data = await response.json();
							const updateCharacters = store.allCharacters.concat(data.results);
							localStorage.removeItem("allCharacters")
							localStorage.setItem("allCharacters", JSON.stringify(updateCharacters));
							setStore({ allCharacters: updateCharacters });
						} catch (error) {
							console.error(error);
						}
					}
				}
			},

			getNewPltPage: async (pltPage) => {
				try {
					if (pltPage != 1) {
						const store = getStore();
						const response = await fetch(`https://www.swapi.tech/api/planets?page=${pltPage}&limit=10`);
						const data = await response.json();
						const updatePlanets = store.allPlanets.concat(data.results);
						localStorage.removeItem("allPlanets")
						localStorage.setItem("allPlanets", JSON.stringify(updatePlanets));
						setStore({ allPlanets: updatePlanets });
					}
				} catch (error) {
					console.error(error);
				}
			},

			getNewVhlPage: async (vhlPage) => {
				try {
					if (vhlPage != 1) {
						const store = getStore();
						const response = await fetch(`https://www.swapi.tech/api/vehicles?page=${vhlPage}&limit=10`);
						const data = await response.json();
						const updateVehicles = store.allVehicles.concat(data.results);
						localStorage.removeItem("allVehicles")
						localStorage.setItem("allVehicles", JSON.stringify(updateVehicles));
						setStore({ allVehicles: updateVehicles });
					}
				} catch (error) {
					console.error(error);
				}
			},

		}
	};
};

export default getState;
