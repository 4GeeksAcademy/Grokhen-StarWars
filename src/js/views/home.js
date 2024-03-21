import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EmptyCard from "../component/emptyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<>

			<div className="text-center mt-5">
				<h2>Characters</h2>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-3 g-4 overflow-auto">
					{store.allCharacters.map((character) => (
						<EmptyCard cardData={character} type="characters" key={character.uid} />
					))};
				</div>
				<h2>Vehicles</h2>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-3 g-4 overflow-auto">
					{store.allVehicles.map((vehicle) => (
						<EmptyCard cardData={vehicle} type="vehicles" key={vehicle.uid} />
					))};
				</div>
				<h2>Planets</h2>
				<div className="d-flex flex-row flex-nowrap row row-cols-1 row-cols-md-3 g-4 overflow-auto">
					{store.allPlanets.map((planet) => (
						<EmptyCard cardData={planet} type="planets" key={planet.uid} />
					))};
				</div>
			</div>
		</>
	)
};
