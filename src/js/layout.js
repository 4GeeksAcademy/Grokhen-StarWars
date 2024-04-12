import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import SingleVehicle from "./views/singleVehicle";
import SinglePlanet from "./views/singlePlanet";
import SingleCharacter from "./views/singleCharacter";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/details/vehicles/:id" element={<SingleVehicle />} />
						<Route path="/details/planets/:id" element={<SinglePlanet />} />
						<Route path="/details/people/:id" element={<SingleCharacter />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
