import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { URL_API } from "../const/url.const";



const SinglePlanet = () => {
    const [singleObject, setSingleObject] = useState({});
    const params = useParams();

    const getSingleObject = async () => {
        try {
            const response = await fetch(`${URL_API}i/planets/${params.id}`);
            const data = await response.json();
            setSingleObject(data.result.properties);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSingleObject();
    }, []);

    return (
        <>
            <div className="card mb-3 border-danger bg-dark text-light text-center">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={(params.id === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : ((params.id === "20") ? `https://qph.cf2.quoracdn.net/main-qimg-cca6401da044683273d781c9d9cf6b40-lq` : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`)} className="img-fluid rounded-start" alt={`image of ${singleObject.name}`}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-4">{singleObject.name}</h5>
                            <p className="card-text">Population: {singleObject.population}</p>
                            <p className="card-text">Climate: {singleObject.climate}</p>
                            <p className="card-text">Gravity: {singleObject.gravity}</p>
                            <p className="card-text">Orbital Period: {singleObject.orbital_period} days</p>
                            <p className="card-text">Rotation Period: {singleObject.rotation_period} days</p>
                            <p className="card-text">Surface Water: {singleObject.surface_water}%</p>
                            <p className="card-text">Terrain: {singleObject.terrain}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePlanet;