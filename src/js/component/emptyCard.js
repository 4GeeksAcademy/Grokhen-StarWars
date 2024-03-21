import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";



const EmptyCard = ({ cardData, type }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleClick = (data, type) => {
       actions.addFavorite(data, type)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={(type === "planets" && cardData.uid === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/${type}/${cardData.uid}.jpg`} className="card-img-top rounded" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{cardData.name}</h5>
                    <div className="container-fluid text-center">
                        <div className="row justify-content-evenly">
                            <a href="#" className="btn btn-primary" onClick={() => navigate(`/details/${(type === "characters") ? "people" : type}/${cardData.uid}`)} >+info</a> 
                            <div> 
                                <span className="fa fa-heart" onClick={() => handleClick(cardData, type)}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCard;