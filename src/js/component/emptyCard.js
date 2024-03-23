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
        <div className="g-col-2">
            <div className="card h-100 border-danger bg-dark gap-1" style={{ width: "15rem" }}>
                <img src={(type === "planets" && cardData.uid === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/${type}/${cardData.uid}.jpg`} className="card-img-top rounded" alt="..."></img>
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light">{cardData.name}</h5>
                    <div className="container-fluid text-center">
                        <div className="row justify-content-evenly align-items-center">
                            <a href="#" className="btn btn-danger col" onClick={() => navigate(`/details/${(type === "characters") ? "people" : type}/${cardData.uid}`)} >+info</a> 
                            <div className="col"> 
                                <span className="fa fa-bookmark text-light" onClick={() => handleClick(cardData, type)}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCard;