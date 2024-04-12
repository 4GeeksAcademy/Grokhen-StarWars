import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EmptyCard from "../component/emptyCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { state, setState } = useContext(Context)
	const [chrPage, setChrPage] = useState(1)
	const [pltPage, setPltPage] = useState(1)
	const [vhlPage, setVhlPage] = useState(1)

	useEffect(() => {
		if (store.allCharacters.length > 10) {
			setChrPage(3)
		}
		if (store.allPlanets.length > 10){
			setPltPage(3)
		}
		if (store.allVehicles.length > 10) {
			setVhlPage(3)
		}
	},[])


	const handleMoreChr = () => {
		if (chrPage < 2) setChrPage(chrPage + 1)
	}
	useEffect(() => {
		actions.getNewChrPage(chrPage)
	}, [chrPage === 2])

	
	const handleMorePlt = () => {
		if (pltPage < 2) setPltPage(pltPage + 1)
	}
	useEffect(() => {
		actions.getNewPltPage(pltPage)
	}, [pltPage === 2])


	const handleMoreVhl = () => {
		if (vhlPage < 2) setVhlPage(vhlPage + 1)
	}
	useEffect(() => {
		actions.getNewVhlPage(vhlPage)
	}, [vhlPage === 2])


	return (

		<>

			<div className=" text-center mt-5 mx-5">
				<h2 className="mb-2">Characters</h2>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5">
					{store.allCharacters.map((character) => (
						<EmptyCard key={character.uid} cardData={character} type="characters" id={character.uid} />
					))};
					<div className="g-col-2 container-fluid">
						<div className="card h-100 border-danger bg-dark justify-content-center align-items-center emptyCard" style={{ width: "14rem" }} onClick={handleMoreChr}>
							<p className="text-light">{chrPage===1 ? "Load More" : "No More Data Available"}</p>
						</div>
					</div>
				</div>
				<h2 className="mb-2">Planets</h2>
				<div className="d-flex flex-row flex-nowrap row row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5">
					{store.allPlanets.map((planet) => (
						<EmptyCard key={planet.uid} cardData={planet} type="planets" id={planet.uid} />
					))};
					<div className="g-col-2 container-fluid">
						<div className="card h-100 border-danger bg-dark justify-content-center align-items-center emptyCard" style={{ width: "14rem" }} onClick={handleMorePlt}>
							<p className="text-light">{pltPage===1 ? "Load More" : "No More Data Available"}</p>
						</div>
					</div>
				</div>
				<h2 className="mb-2">Vehicles</h2>
				<div className="d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-5 mx-5">
					{store.allVehicles.map((vehicle) => (
						<EmptyCard key={vehicle.uid} cardData={vehicle} type="vehicles" id={vehicle.uid} />
					))};
					<div className="g-col-2 container-fluid">
						<div className="card h-100 border-danger bg-dark justify-content-center align-items-center emptyCard" style={{ width: "14rem" }} onClick={handleMoreVhl}>
							<p className="text-light">{vhlPage===1 ? "Load More" : "No More Data Available"}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

//Como implemento un cambio de pagina en cada seccion?