import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";



const EmptyCard = ({ cardData, type }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
  

    const handleClick = (data, type) => {
       actions.addFavorite(data, type);
       setIsFavorite(!isFavorite);
    };

    return (
        <div className="g-col-2 mobile">
            <div className="card h-100 border-danger bg-dark gap-1  emptyCard" style={{ width: "14rem" }}>
                <img src={(type === "planets" && cardData.uid === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : ((type === "planets" && cardData.uid === "20") ? `https://qph.cf2.quoracdn.net/main-qimg-cca6401da044683273d781c9d9cf6b40-lq` : `https://starwars-visualguide.com/assets/img/${type}/${cardData.uid}.jpg`)} className="card-img-top rounded" alt={`image of ${cardData.name}`}></img>
                <div className="card-body bg-dark">
                    <h5 className="card-title text-light">{cardData.name}</h5>
                    <div className="container-fluid text-center">
                        <div className="row justify-content-evenly align-items-center">
                            <a href="#" className="btn btn-danger col" onClick={() => navigate(`/details/${(type === "characters") ? "people" : type}/${cardData.uid}`)} >+info</a> 
                            <div className="col"> 
                                <FaBookmark className={isFavorite ? `text-danger` : `text-light`} onClick={() => handleClick(cardData, type)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCard;