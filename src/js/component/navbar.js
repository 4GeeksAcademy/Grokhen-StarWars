import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

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
					<div className="ml-auto justify-content-center">
						<div className="dropstart">
							<button className="btn btn-danger dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Archived
							</button>
							<ul className="dropdown-menu justify-content-around">
								{store.favorites.map((object, index) => (
									<li className="dropdown-item btn-dark" key={index} >
										<p className="col" onClick={() => navigate(`/details/${(object.type === "characters") ? "people" : object.type}/${object.uid}`)}>{object.name}</p>
										<FaTrashAlt className="col trash" onClick={() => handleRemove(index)}/>
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
