import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EmptyCard from "../component/emptyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const {state, setState} = useContext(Context)


	const [page, setPage] = useState(1)
	const handlePrevChr = () => {
		if (page > 1) setPage(page - 1)
	};
	const handleNextChr = () => {
		if (page < 9) setPage(page + 1)
	}


	useEffect(() => {
		actions.getNewPage(page)
	}, [page])


	return (

		<>

			<div className="container-fluid text-center mt-5 mx-5">
				<h2 className="mb-2">Characters</h2>
				<div>
					<button onClick={handlePrevChr}>Prev</button>
					<button onClick={handleNextChr}>Next</button>
				</div>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5">
					{store.allCharacters.map((character) => (
						<EmptyCard cardData={character} type="characters" key={character.uid} />
					))};
				</div>
				<h2 className="mb-2">Vehicles</h2>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5">
					{store.allVehicles.map((vehicle) => (
						<EmptyCard cardData={vehicle} type="vehicles" key={vehicle.uid} />
					))};
				</div>
				<h2 className="mb-2">Planets</h2>
				<div className="d-flex flex-row flex-nowrap row row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5">
					{store.allPlanets.map((planet) => (
						<EmptyCard cardData={planet} type="planets" key={planet.uid} />
					))};
				</div>
			</div>
		</>
	)
};

//Como implemento un cambio de pagina en cada seccion?