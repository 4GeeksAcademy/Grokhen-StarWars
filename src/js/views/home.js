import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EmptyCard from "../component/emptyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const {state, setState} = useContext(Context)

//Characters page changer
	const [chrPage, setChrPage] = useState(1)

	const handleMoreChr = () => {
		if (chrPage < 9) setChrPage(chrPage + 1)
	}
	useEffect(() => {
		actions.getNewChrPage(chrPage)
	}, [chrPage])

	const [pltPage, setPltPage] = useState(1)
	const handleMorePlt = () => {
		if (pltPage < 2) setPltPage(pltPage + 1)
	}
	useEffect(() => {
		actions.getNewPltPage(pltPage)
	}, [pltPage])

	const [vhlPage, setVhlPage] = useState(1)
	const handleMoreVhl = () => {
		if (vhlPage < 2) setVhlPage(vhlPage + 1)
	}
	useEffect(() => {
		actions.getNewVhlPage(vhlPage)
	}, [vhlPage])



	return (

		<>

			<div className=" text-center mt-5 mx-5">
				<h2 className="mb-2">Characters</h2>
				<div className="mb-2">
					<button onClick={handleMoreChr}>Load+</button>
				</div>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5 characters">
					{store.allCharacters.map((character) => (
						<EmptyCard cardData={character} type="characters" key={character.uid} />
					))};
				</div>				
				<h2 className="mb-2">Planets</h2>
				<div className="mb-2">
					<button onClick={handleMorePlt}>Load+</button>
				</div>
				<div className="d-flex flex-row flex-nowrap row row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5">
					{store.allPlanets.map((planet) => (
						<EmptyCard cardData={planet} type="planets" key={planet.uid} />
					))};
				</div>
				<h2 className="mb-2">Vehicles</h2>
				<div className="mb-2">
					<button onClick={handleMoreVhl}>Load+</button>
				</div>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5">
					{store.allVehicles.map((vehicle) => (
						<EmptyCard cardData={vehicle} type="vehicles" key={vehicle.uid} />
					))};
				</div>
			</div>
		</>
	)
};

//Como implemento un cambio de pagina en cada seccion?