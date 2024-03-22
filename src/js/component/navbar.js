import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleRemove = (index) => {
		actions.removeFav(index)
	}

	return (
		<nav className="navbar navbar-dark bg-black mb-3 mx-4 container-fluid">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto justify-content-between">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((object, index) => (
							<li className="dropdown-item" key={index} >
								<p onClick={() => navigate(`/details/${(object.type === "characters") ? "people" : object.type}/${object.uid}`)}>{object.name}</p>
									<span className="fa fa-trash" onClick={() => handleRemove(index)}></span>							
							</li>
						))}


					</ul>
				</div>
			</div>
		</nav>
	);
};
