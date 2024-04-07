import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { PiCrosshair } from "react-icons/pi";

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
				<nav className="navbar navbar-dark bg-black mb-3 justify-content-between">
					<div className="col navbar-brand text-start">
						<Link to="/">
							<img className="logo ms-0" src={logoSw}></img>
						</Link>
					</div>
					<div className="ml-auto justify-content-center">
						<div className="dropstart text-end">
							<button className="btn btn-danger dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{!store.favorites.length > 0 ? "Archived" : store.favorites.length + ` ` + `Archived`}
							</button>
							<ul className="dropdown-menu container text-start favorite-list" style={{display: !store.favorites.length > 0 && "none"}}>
								{store.favorites.map((object, index) => (
									<li className="dropdown-item btn-dark justify-content-between" key={index} >
										<span className="col-1" onClick={() => navigate(`/details/${(object.type === "characters") ? "people" : object.type}/${object.uid}`)}>{object.name}</span> 
										<PiCrosshair className="col-3" onClick={() => handleRemove(index)}/>
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
