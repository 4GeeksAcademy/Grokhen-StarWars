import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/navbar.css";

import logoSw from "./../../img/SW_logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleRemove = (index) => {
		actions.removeFav(index)
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<nav className="navbar navbar-dark bg-black mb-3 container-fluid">
					<div className="navbar-brand">
						<Link to="/">
							<img className="logo" src={logoSw}></img>
						</Link>
					</div>
					<div className="ml-auto justify-content-between">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
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
			</div>
		</div>
	);
};
