import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EmptyCard from "../component/emptyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<>
			<div className="text-center mt-5">
				<h1>StarWars</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.allCharacters.map((character) => (
						<EmptyCard cardData={character} type="characters" key={character.uid}/>
					))};
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.allVehicles.map((vehicle) => (
						<EmptyCard cardData={vehicle} type="vehicles" key={vehicle.uid}/>
					))};
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.allPlanets.map((planet) => (
						<EmptyCard cardData={planet} type="planets" key={planet.uid}/>
					))};
				</div>
			</div>
		</>
	)
};
