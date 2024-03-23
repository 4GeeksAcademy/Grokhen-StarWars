import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";



const SinglePlanet = () => {
    const [singleObject, setSingleObject] = useState({});
    const params = useParams();

    const getSingleObject = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${params.id}`);
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
                        <img src={(params.id === "1") ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."></img>
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