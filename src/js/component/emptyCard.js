import React from "react";




const EmptyCard = ({cardData, type}) => {
    return (
        <div className="col">
            <div className="card">
                <img src={(type==="planets" && cardData.uid === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/${type}/${cardData.uid}.jpg`} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{cardData.name}</h5>
                        <a href="#" class="btn btn-primary">¿Desea saber más?</a> {/* poner onClick para que lleve a la pagina de detalle */}
                    </div>
            </div>
        </div>
    )
}

export default EmptyCard;